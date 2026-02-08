import { Component, inject } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { CommonModule } from '@angular/common';
import { SingleIngredientComponent } from '../single-ingredient/single-ingredient.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  imports: [CommonModule, SingleIngredientComponent, RouterLink, FormsModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss',
})
export class IngredientsComponent {
  private ingredientService = inject(IngredientService);

  ingredient = '';
  crowd: number | null = null;
  selectedUnit = '';
  units: string[] = [];

  isOpen = false;

  constructor() {
    this.units = this.ingredientService.units;
    this.selectedUnit = this.ingredientService.selectedUnit;
    this.ingredient = this.ingredientService.ingredient;
    this.crowd = this.ingredientService.crowd;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectUnit(unit: string) {
    this.selectedUnit = unit;
    this.ingredientService.selectedUnit = unit;
    this.closeDropdown();
  }

  closeDropdown() {
    this.isOpen = false;
  }

  addIngredient() {
    this.ingredientService.ingredient = this.ingredient;
    this.ingredientService.crowd = this.crowd;
    this.ingredientService.addIngredient();

    this.ingredient = '';
    this.crowd = null;
  }

  get ingredients() {
    return this.ingredientService.addedIngredients;
  }
}
