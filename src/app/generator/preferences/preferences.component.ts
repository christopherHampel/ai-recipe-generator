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

  ngOnInit() {
    console.log(this.ingredientsService.addedIngredients); 
  }

}
