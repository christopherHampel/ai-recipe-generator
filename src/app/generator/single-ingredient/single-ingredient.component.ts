import { Component, inject, Input } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-single-ingredient',
  imports: [],
  templateUrl: './single-ingredient.component.html',
  styleUrl: './single-ingredient.component.scss'
})
export class SingleIngredientComponent {

  private ingredientsService = inject(IngredientService);

  get ingredients() {
    return this.ingredientsService.addedIngredients
  }

  editIngredient(ingredient:Ingredient) {

  }

  deleteIngredient(ingredient:Ingredient) {
    
  }
}
