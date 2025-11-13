import { Component, inject } from '@angular/core';
import { IngredientService } from '../../../services/ingredient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuisine-style',
  imports: [CommonModule],
  templateUrl: './cuisine-style.component.html',
  styleUrl: './cuisine-style.component.scss',
})
export class CuisineStyleComponent {
  private ingredientService = inject(IngredientService);

  cuisinesStyles: string[] = [
    'German',
    'Italian',
    'Indian',
    'Japanese',
    'Gourmet',
    'Fusion',
  ];

  selectCuisineStyle(cuisine: string) {
    if (!this.styleIncludes(cuisine)) {
      this.ingredientService.selectedCuisineStyle.push(cuisine);
    } else {
      this.removeCuisineStyle(cuisine);
    }
    console.log(this.ingredientService.selectedCuisineStyle);
  }

  removeCuisineStyle(cuisine: string) {
    let currentIndex = this.ingredientService.selectedCuisineStyle.findIndex(
      (index) => index == cuisine
    );
    this.ingredientService.selectedCuisineStyle.splice(currentIndex, 1);
  }

  styleIncludes(cuisine: string) {
    return this.ingredientService.selectedCuisineStyle.includes(cuisine);
  }

  isSelected(cuisine:string) {
    return this.ingredientService.selectedCuisineStyle.includes(cuisine);
  }
}
