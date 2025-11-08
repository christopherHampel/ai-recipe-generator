import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SingleIngredientComponent } from "./single-ingredient/single-ingredient.component";
import { Ingredient } from '../interfaces/ingredient';

@Component({
  selector: 'app-generator',
  imports: [HeaderComponent, CommonModule, FormsModule, SingleIngredientComponent],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss',
})
export class GeneratorComponent {
  isOpen = false;
  units = ['grams', 'ml', 'piece'];
  selectedUnit = 'grams';

  ingredient: string = '';
  crowd: number | null = null;
  addedIngredients: Ingredient[] = [];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectUnit(unit: string) {
    this.selectedUnit = unit;
    this.closeDropdown();
  }

  closeDropdown() {
    this.isOpen = false;
  }

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
