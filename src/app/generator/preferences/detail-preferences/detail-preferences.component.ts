import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferenceBaseComponent } from '../preference-base';
import { IngredientService } from '../../../services/ingredient.service';

@Component({
  selector: 'app-detail-preferences',
  imports: [CommonModule],
  templateUrl: './detail-preferences.component.html',
  styleUrl: './detail-preferences.component.scss',
})
export class DetailPreferencesComponent extends PreferenceBaseComponent {
  options = [
    { option: 'Quick', description: 'ab to 20 min' },
    { option: 'Medium', description: '25-40 min' },
    { option: 'Complex', description: 'over 45 min' },
  ];

  list = [];

  constructor(protected override ingredientService: IngredientService) {
    super(ingredientService);
  }

  selectOption(value: string) {
    this.ingredientService.selectSingle('detailPreference', value);
  }

  override isSelected(value: string) {
    return this.ingredientService.isSelectedSingle('detailPreference', value);
  }
}
