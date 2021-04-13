import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BirdService } from '../birds/bird.service';
import { Bird } from '../birds/bird';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  birds: Bird [] = [];

  constructor(
    private router: Router,
    private birdService: BirdService) {
  }

  ngOnInit(): void {
    this.birdService.getBirds()
      .subscribe(birds => this.birds = birds.slice(1, 5));
  }

  gotoDetail(bird: Bird): void {
    const link = ['/detail', bird.id];
    this.router.navigate(link);
  }
}
