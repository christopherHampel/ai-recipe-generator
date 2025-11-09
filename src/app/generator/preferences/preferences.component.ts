import { Component } from '@angular/core';
import { DetailPreferencesComponent } from "./detail-preferences/detail-preferences.component";
import { PortionsPersonsCounterComponent } from "./portions-persons-counter/portions-persons-counter.component";
import { CuisineStyleComponent } from "./cuisine-style/cuisine-style.component";
import { DietPreferencesComponent } from "./diet-preferences/diet-preferences.component";

@Component({
  selector: 'app-preferences',
  imports: [DetailPreferencesComponent, PortionsPersonsCounterComponent, CuisineStyleComponent, DietPreferencesComponent],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss',
})
export class PreferencesComponent {
 
}
