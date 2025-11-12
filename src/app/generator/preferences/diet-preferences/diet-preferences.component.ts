import { Component, inject } from '@angular/core';
import { IngredientService } from '../../../services/ingredient.service';

@Component({
  selector: 'app-diet-preferences',
  imports: [],
  templateUrl: './diet-preferences.component.html',
  styleUrl: './diet-preferences.component.scss'
})
export class DietPreferencesComponent {
private ingredientService = inject(IngredientService);

dietPreferences: string[] = [
  'Vegetarian',
  'Vegan',
  'Keto',
  'No preferences',
];

  selectCuisineStyle(cuisine: string) {
    if (!this.styleIncludes(cuisine)) {
      this.ingredientService.selectedCuisineStyle.push(cuisine);
    } else {
      this.removeCuisineStyle(cuisine);
    }
    console.log(this.ingredientService.selectedCuisineStyle);
  }

  styleIncludes(cuisine:string) {
    return false
  }

  removeCuisineStyle(cuisine:string) {}

}
