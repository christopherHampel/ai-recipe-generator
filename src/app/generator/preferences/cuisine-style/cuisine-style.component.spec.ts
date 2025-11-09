import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineStyleComponent } from './cuisine-style.component';

describe('CuisineStyleComponent', () => {
  let component: CuisineStyleComponent;
  let fixture: ComponentFixture<CuisineStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuisineStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
