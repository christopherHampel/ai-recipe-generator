import { Component, inject } from '@angular/core';
import { IngredientService } from '../../../services/ingredient.service';

@Component({
  selector: 'app-portions-persons-counter',
  imports: [],
  templateUrl: './portions-persons-counter.component.html',
  styleUrl: './portions-persons-counter.component.scss'
})
export class PortionsPersonsCounterComponent {
 private ingredientsService = inject(IngredientService);

  get portions() {
    return this.ingredientsService.portions;
  }

  get persons() {
    return this.ingredientsService.persons;
  }

  changeValue(key: 'portions' | 'persons', operator: string) {
    const current = this.ingredientsService[key];
    if (operator == '-') {
      this.minusValue(key, current);
    } else {
      this.plusValue(key, current);
    }
  }

  minusValue(key: 'portions' | 'persons', current: number) {
    if (current > 1) {
      if (typeof current === 'number') {
        this.ingredientsService[key] = current - 1;
      } else {
        this.ingredientsService[key] = current - 1;
      }
    }
  }

  plusValue(key: 'portions' | 'persons', current: number) {
    if (current < 8) {
      if (typeof current === 'number') {
        this.ingredientsService[key] = current + 1;
      } else {
        this.ingredientsService[key] = current + 1;
      }
    }
  }
}
