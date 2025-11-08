import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SingleIngredientComponent } from './single-ingredient/single-ingredient.component';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, SingleIngredientComponent],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss',
})
export class GeneratorComponent {
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
}
