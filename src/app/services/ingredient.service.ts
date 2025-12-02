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
  persons: number = 1;
  detailPreference: string | null = null;
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

  updateIngredient(index: number, updatedIngredient: Partial<Ingredient>) {
    if (index >= 0 && index < this.addedIngredients.length) {
      this.addedIngredients[index] = {
        ...this.addedIngredients[index],
        ...updatedIngredient,
      };
    }
  }

  toggleValue(list: string[], value: string) {
    const i = list.indexOf(value);
    i === -1 ? list.push(value) : list.splice(i, 1);
  }

  selectSingle(key: 'detailPreference', value: string) {
    this[key] = value;
  }

  isSelectedSingle(key: 'detailPreference', value: string) {
    return this[key] === value;
  }
}
