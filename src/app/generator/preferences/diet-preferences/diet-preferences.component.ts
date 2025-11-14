import { Component } from '@angular/core';
import { IngredientService } from '../../../services/ingredient.service';
import { CommonModule } from '@angular/common';
import { PreferenceBaseComponent } from '../preference-base';

@Component({
  selector: 'app-diet-preferences',
  imports: [CommonModule],
  templateUrl: './diet-preferences.component.html',
  styleUrl: './diet-preferences.component.scss',
})
export class DietPreferencesComponent extends PreferenceBaseComponent {

  constructor(ingredientService: IngredientService) {
    super(ingredientService)
  }

  list = this.ingredientService.selectedDietPreferences;

  dietPreferences: string[] = ['Vegetarian', 'Vegan', 'Keto', 'No preferences'];
}
