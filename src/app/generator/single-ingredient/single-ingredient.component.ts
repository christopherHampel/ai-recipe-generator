import { Component, inject, Input } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient';
import { IngredientService } from '../../services/ingredient.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-ingredient',
  imports: [FormsModule, CommonModule],
  templateUrl: './single-ingredient.component.html',
  styleUrl: './single-ingredient.component.scss'
})
export class SingleIngredientComponent {

  private ingredientsService = inject(IngredientService);

  editingIndex: number | null = null;
  editedName: string = '';
  editedUnit: string = '';
  editedCrowd: number | null = null;
  isDropdownOpen: boolean = false;

  get ingredients() {
    return this.ingredientsService.addedIngredients
  }

  get units() {
    return this.ingredientsService.units;
  }

  editIngredient(ingredient: Ingredient, index: number) {
    this.editingIndex = index;
    this.editedName = ingredient.name;
    this.editedUnit = ingredient.unit;
    this.editedCrowd = ingredient.crowd;
  }

  saveEdit(index: number) {
    if (this.editedName.trim() && this.editedUnit && this.editedCrowd !== null) {
      this.ingredientsService.updateIngredient(index, {
        name: this.editedName.trim(),
        unit: this.editedUnit,
        crowd: this.editedCrowd
      });
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editedName = '';
    this.editedUnit = '';
    this.editedCrowd = null;
    this.isDropdownOpen = false;
  }

  toggleUnitDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectUnit(unit: string) {
    this.editedUnit = unit;
    this.isDropdownOpen = false;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  deleteIngredient(ingredient: Ingredient) {
    const index = this.ingredientsService.addedIngredients.indexOf(ingredient);
    if (index === this.editingIndex) {
      this.cancelEdit();
    }
    this.ingredientsService.deleteIngredient(ingredient);
  }
}
