import { Component, inject } from '@angular/core';
import { DetailPreferencesComponent } from './detail-preferences/detail-preferences.component';
import { PortionsPersonsCounterComponent } from './portions-persons-counter/portions-persons-counter.component';
import { CuisineStyleComponent } from './cuisine-style/cuisine-style.component';
import { DietPreferencesComponent } from './diet-preferences/diet-preferences.component';
import { Router, RouterLink } from '@angular/router';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-preferences',
  imports: [
    DetailPreferencesComponent,
    PortionsPersonsCounterComponent,
    CuisineStyleComponent,
    DietPreferencesComponent,
    RouterLink,
  ],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss',
})
export class PreferencesComponent {
  private router = inject(Router);
  private ingredientService = inject(IngredientService);

  generateRecipe() {
    let recipeInfo = {
      portions: this.ingredientService.portions,
      persons: this.ingredientService.persons,
      ingredients: this.ingredientService.addedIngredients,
      cuisineStyles: this.ingredientService.selectedCuisineStyle,
      dietPreferences: this.ingredientService.selectedDietPreferences,
    }
    console.log(recipeInfo);
    this.router.navigate(['/results/generating']);
  }
}
