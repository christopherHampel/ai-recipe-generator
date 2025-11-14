import { Component } from '@angular/core';
import { IngredientService } from '../../../services/ingredient.service';
import { CommonModule } from '@angular/common';
import { PreferenceBaseComponent } from '../preference-base';

@Component({
  selector: 'app-cuisine-style',
  imports: [CommonModule],
  templateUrl: './cuisine-style.component.html',
  styleUrl: './cuisine-style.component.scss',
})
export class CuisineStyleComponent extends PreferenceBaseComponent {
  constructor(ingredientService: IngredientService) {
    super(ingredientService);
  }

  list = this.ingredientService.selectedCuisineStyle;

  cuisinesStyles: string[] = [
    'German',
    'Italian',
    'Indian',
    'Japanese',
    'Gourmet',
    'Fusion',
  ];
}
