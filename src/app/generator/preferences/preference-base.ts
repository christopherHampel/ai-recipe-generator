import { IngredientService } from '../../services/ingredient.service';

export abstract class PreferenceBaseComponent {
  constructor(protected ingredientService: IngredientService) {}

  abstract list: string[];

  toggleList(value: string) {
    const i = this.list.indexOf(value);
    i === -1 ? this.list.push(value) : this.list.splice(i, 1);
  }

  isSelected(value: string) {
    return this.list.includes(value);
  }
}
