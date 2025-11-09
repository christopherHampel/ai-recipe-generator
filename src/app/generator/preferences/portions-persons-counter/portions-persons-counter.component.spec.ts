import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionsPersonsCounterComponent } from './portions-persons-counter.component';

describe('PortionsPersonsCounterComponent', () => {
  let component: PortionsPersonsCounterComponent;
  let fixture: ComponentFixture<PortionsPersonsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortionsPersonsCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortionsPersonsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
