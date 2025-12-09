import { Component, inject } from '@angular/core';
import { DetailPreferencesComponent } from './detail-preferences/detail-preferences.component';
import { PortionsPersonsCounterComponent } from './portions-persons-counter/portions-persons-counter.component';
import { CuisineStyleComponent } from './cuisine-style/cuisine-style.component';
import { DietPreferencesComponent } from './diet-preferences/diet-preferences.component';
import { Router, RouterLink } from '@angular/router';
import { IngredientService } from '../../services/ingredient.service';
import { N8nCommunicationService } from '../../services/n8n-communication/n8n-communication.service';

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

  get isFormValid(): boolean {
    return (
      this.ingredientService.detailPreference !== null &&
      this.ingredientService.selectedCuisineStyle.length > 0 &&
      this.ingredientService.selectedDietPreferences.length > 0
    );
  }

  generateRecipe() {
    this.createRecipeInfo();
    this.router.navigate(['/results/generating']);
  }

  createRecipeInfo() {
    let recipeInfo = {
      "portions": this.ingredientService.portions,
      "persons": this.ingredientService.persons,
      // ingredients: this.ingredientService.addedIngredients,
      "ingredients": ['Tomate', 'Pasta'],
      "cuisineStyles": this.ingredientService.selectedCuisineStyle,
      "dietPreferences": this.ingredientService.selectedDietPreferences,
    }
    this.ingredientService.recipeInfo = recipeInfo;
  }
}