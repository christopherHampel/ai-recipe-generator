import { Component } from '@angular/core';
import { DetailPreferencesComponent } from "./detail-preferences/detail-preferences.component";
import { PortionsPersonsCounterComponent } from "./portions-persons-counter/portions-persons-counter.component";

@Component({
  selector: 'app-preferences',
  imports: [DetailPreferencesComponent, PortionsPersonsCounterComponent],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss',
})
export class PreferencesComponent {
 
}
