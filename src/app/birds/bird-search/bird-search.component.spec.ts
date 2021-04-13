import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdSearchComponent } from './bird-search.component';

describe('BirdSearchComponent', () => {
  let component: BirdSearchComponent;
  let fixture: ComponentFixture<BirdSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
