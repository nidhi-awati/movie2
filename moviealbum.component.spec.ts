import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviealbumComponent } from './moviealbum.component';

describe('MoviealbumComponent', () => {
  let component: MoviealbumComponent;
  let fixture: ComponentFixture<MoviealbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviealbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviealbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
