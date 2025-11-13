import { Component, inject } from '@angular/core';
import { IngredientService } from '../../../services/ingredient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet-preferences',
  imports: [CommonModule],
  templateUrl: './diet-preferences.component.html',
  styleUrl: './diet-preferences.component.scss',
})
export class DietPreferencesComponent {
  private ingredientService = inject(IngredientService);

  dietPreferences: string[] = ['Vegetarian', 'Vegan', 'Keto', 'No preferences'];

  selectDietPreference(diet: string) {
    if (!this.styleIncludes(diet)) {
      this.ingredientService.selectedDietPreferences.push(diet);
    } else {
      this.removeDietPreference(diet);
    }
  }

  styleIncludes(diet: string) {
    return this.ingredientService.selectedDietPreferences.includes(diet);
  }

  removeDietPreference(diet: string) {
    let currentIndex = this.ingredientService.selectedDietPreferences.findIndex(
      (index) => index == diet
    );
    this.ingredientService.selectedDietPreferences.splice(currentIndex, 1);
  }

  isSelected(diet: string) {
    return this.ingredientService.selectedDietPreferences.includes(diet);
  }
}
