import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { N8nCommunicationService } from '../../services/n8n-communication/n8n-communication.service';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-generate',
  imports: [],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss',
})
export class GenerateComponent {
  private router = inject(Router);
  private ingredientService = inject(IngredientService);
  private n8nCommunicationService = inject(N8nCommunicationService);

  ngOnInit() {
    this.n8nCommunicationService.sendIngredients(this.ingredientService.recipeInfo).subscribe(response => {
      // this.n8nCommunicationService.recipes.push(response);
      this.n8nCommunicationService.recipes = response;
      console.log(this.n8nCommunicationService.recipes);
      this.router.navigate(['/results/all_results']);
    });
  }
}
