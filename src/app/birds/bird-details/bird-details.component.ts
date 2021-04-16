import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bird } from '../bird';
import { BirdService } from '../bird.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-bird-details',
  templateUrl: './bird-details.component.html',
  styleUrls: ['./bird-details.component.scss']
})
export class BirdDetailsComponent implements OnInit {

  @Input() bird: Bird;
  @Output() close = new EventEmitter();
  error: any;
  filterName: string;
  navigated = false; // true if navigated here
  renameBird: any;
  name = new FormControl('id');


  constructor(
    private birdService: BirdService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id = +params.id;
        this.navigated = true;
        this.birdService.getBird(id).subscribe(bird => (this.bird = bird));
      } else {
        this.navigated = false;
        this.bird = new Bird();
      }
    });
  }

  save(): void {
    this.birdService.save(this.bird).subscribe(bird => {
      this.bird = bird; // saved bird, w/ id IF NEW
      this.refresh();
    }, error => (this.error = error)); // TODO: Display error message ??
  }

  goBack(savedBird: Bird = null): void {
    this.close.emit(savedBird);
    if (this.navigated) {
      window.history.back();
    }
  }

updateName(): void{
  this.name.setValue(this.bird.original);
  this.birdService.save(this.bird).subscribe(bird => {
    this.bird = bird;
    this.refresh();
    }, error => (this.error = error)); // TODO: Display error message ??
  }

  refresh(): void {
    this.route.params.forEach((params: Params) => {
          const id = +params.id;
          this.navigated = true;
          this.birdService.getBird(id).subscribe(bird => (this.bird = bird));
        }
      );
    }

clear(): void {
  this.name.setValue('');
  }
}
