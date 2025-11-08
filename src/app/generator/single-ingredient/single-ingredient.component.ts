import { Component, Input } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient';

@Component({
  selector: 'app-single-ingredient',
  imports: [],
  templateUrl: './single-ingredient.component.html',
  styleUrl: './single-ingredient.component.scss'
})
export class SingleIngredientComponent {

  @Input() ingredients:any = [];

  editIngredient(ingredient:Ingredient) {

  }

  deleteIngredient(ingredient:Ingredient) {
    
  }

}
