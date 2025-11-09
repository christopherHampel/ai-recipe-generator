import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-preferences',
  imports: [],
  templateUrl: './detail-preferences.component.html',
  styleUrl: './detail-preferences.component.scss'
})
export class DetailPreferencesComponent {
  selectedValue: string | null = null;

  selectOption(value: string) {
    this.selectedValue = value;
    console.log('Ausgewählt:', this.selectedValue);
  }
}
