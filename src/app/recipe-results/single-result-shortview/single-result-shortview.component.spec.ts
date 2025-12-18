import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResultShortviewComponent } from './single-result-shortview.component';

describe('SingleResultShortviewComponent', () => {
  let component: SingleResultShortviewComponent;
  let fixture: ComponentFixture<SingleResultShortviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleResultShortviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleResultShortviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
