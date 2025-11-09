import { Component, inject } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-preferences',
  imports: [],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss'
})
export class PreferencesComponent {
  private ingredientsService = inject(IngredientService);

  get portions() {
    return this.ingredientsService.portions;
  }

    get persons() {
    return this.ingredientsService.persons;
  }

  minusPortion() {
    let portion = this.ingredientsService.portions - 1;
    this.ingredientsService.portions = portion;    
  }
}
