import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bird } from './bird';
import { BirdService } from './bird.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent implements OnInit {

  birds: Bird [];
  selectedBird: Bird;
  addingBird = false;
  error: any;
  showNgFor = false;
  id: number;
  name: string;

  constructor(private router: Router, private birdService: BirdService) {}

  getBirds(): void {
    this.birdService
      .getBirds()
      .subscribe(
        birds => (this.birds = birds),
        error => (this.error = error)
      );
  }

  addBird(): void {
    this.addingBird = true;
    this.selectedBird = null;
  }

  close(savedBird: Bird): void {
    this.addingBird = false;
    if (savedBird) {
      this.getBirds();
    }
  }

  deleteBird(bird: Bird, event: any): void {
    event.stopPropagation();
    this.birdService.delete(bird).subscribe(res => {
      this.birds = this.birds.filter(h => h !== bird);
      if (this.selectedBird === bird) {
        this.selectedBird = null;
      }
    }, error => (this.error = error));
  }

  ngOnInit(): void {
    this.getBirds();
  }

  onSelect(bird: Bird): void {
    this.selectedBird = bird;
    this.addingBird = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBird.id]);
  }
}
