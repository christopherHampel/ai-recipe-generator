import { Injectable } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  units = ['grams', 'ml', 'piece'];
  selectedUnit = 'grams';
  ingredient: string = '';
  crowd: number | null = null;
  portions: number = 2;
  persons:number = 1;
  addedIngredients: Ingredient[] = [];
  selectedCuisineStyle: string[] = [];
  selectedDietPreferences: string[] = [];

  constructor() {}

  addIngredient() {
    if (!this.ingredient || this.crowd === null) return;

    const newIngredient = {
      name: this.ingredient,
      crowd: this.crowd,
      unit: this.selectedUnit,
    };
    this.addedIngredients.push(newIngredient);
    this.ingredient = '';
    this.crowd = null;
  }
}
