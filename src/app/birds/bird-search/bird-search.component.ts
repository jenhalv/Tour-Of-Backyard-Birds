import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Bird } from '../bird';
import { BirdSearchService } from '../bird-search.service';

@Component({
  selector: 'app-bird-search',
  templateUrl: './bird-search.component.html',
  styleUrls: ['./bird-search.component.scss']
})
export class BirdSearchComponent implements OnInit {

  birds: Observable<Bird[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private birdSearchService: BirdSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.birds = this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(
        term =>
          term // switch to new observable each time
            ? // return the http search observable
              this.birdSearchService.search(term)
            : // or the observable of empty birds if no search term
              of<Bird[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<Bird[]>([]);
      })
    );
  }

  gotoDetail(bird: Bird): void {
    const link = ['/detail', bird.id];
    this.router.navigate(link);
  }
}
