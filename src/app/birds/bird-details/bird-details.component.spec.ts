import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdDetailsComponent } from './bird-details.component';

describe('BirdDetailsComponent', () => {
  let component: BirdDetailsComponent;
  let fixture: ComponentFixture<BirdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
