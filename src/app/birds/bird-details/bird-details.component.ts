import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bird } from '../bird';
import { BirdService } from '../bird.service';
import {FormControl, FormGroup } from '@angular/forms';

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

  constructor(
    private birdService: BirdService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
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
      this.goBack(bird);
    }, error => (this.error = error)); // TODO: Display error message ??
  }

  goBack(savedBird: Bird = null): void {
    this.close.emit(savedBird);
    if (this.navigated) {
      window.history.back();
    }
  }

clear(): void {
this.bird.name = '';
}

reset(bird: Bird): void {
  this.bird.name = 'bird.name';
  console.log(this.bird.name);
  }

}
