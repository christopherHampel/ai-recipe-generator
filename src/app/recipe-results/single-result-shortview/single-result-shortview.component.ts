import { Component, inject } from '@angular/core';
import { N8nCommunicationService } from '../../services/n8n-communication/n8n-communication.service';
import { RecipeDetail } from '../../interfaces/recipe-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-result-shortview',
  imports: [],
  templateUrl: './single-result-shortview.component.html',
  styleUrl: './single-result-shortview.component.scss',
})
export class SingleResultShortviewComponent {
  private router = inject(Router);

  get recipes() {
  const storedRecipes = localStorage.getItem('recipes');

    if (storedRecipes) {
      return JSON.parse(storedRecipes);
    }  
  }

  viewRecipeDetail(recipe: RecipeDetail) {
    let name = recipe.Rezeptname;
    console.log(name);
    
    this.router.navigate(['/recipe_detail', name]);
  }
}
