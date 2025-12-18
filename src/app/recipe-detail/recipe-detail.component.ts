import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { DirectionsComponent } from './directions/directions.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeDetail } from '../interfaces/recipe-detail';

@Component({
  selector: 'app-recipe-detail',
  imports: [
    HeaderComponent,
    DetailHeaderComponent,
    IngredientsComponent,
    DirectionsComponent,
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  recipe!: RecipeDetail;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let recipeName = params['recipeName'];
      this.getRecipeDetailsFromStorage(recipeName);
    });
  }

  getRecipeDetailsFromStorage(recipeName: string) {
    console.log(recipeName);
    
    const recipes = this.recipes();
    this.recipe = recipes.find(
      (r: RecipeDetail) => r.Rezeptname.toLowerCase() === recipeName.toLowerCase()
    );
    console.log(this.recipe);
    
  }

  goToRecipeResults() {
    this.router.navigate(['results/all_results, tis']);
  }

  recipes() {
    const storedRecipes = localStorage.getItem('recipes');

    if (storedRecipes) {
      return JSON.parse(storedRecipes);
    }
  }
}
