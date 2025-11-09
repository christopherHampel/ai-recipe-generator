import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPreferencesComponent } from './detail-preferences.component';

describe('DetailPreferencesComponent', () => {
  let component: DetailPreferencesComponent;
  let fixture: ComponentFixture<DetailPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPreferencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
