import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsIngredientsComponent } from './directions-ingredients.component';

describe('DirectionsIngredientsComponent', () => {
  let component: DirectionsIngredientsComponent;
  let fixture: ComponentFixture<DirectionsIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectionsIngredientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionsIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
