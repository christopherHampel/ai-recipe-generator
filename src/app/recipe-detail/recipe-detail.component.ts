import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { DetailHeaderComponent } from "./detail-header/detail-header.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { DirectionsComponent } from "./directions/directions.component";
import { N8nCommunicationService } from '../services/n8n-communication/n8n-communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  imports: [HeaderComponent, DetailHeaderComponent, IngredientsComponent, DirectionsComponent],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

  private n8nCommunicationService = inject(N8nCommunicationService);
  private router = inject(Router);

  // testN8n() {
  //   this.n8nCommunicationService.sendIngredients({
  //     ingredients: ['Tomate', 'Pasta'],
  //     difficulty: 'leicht',
  //     style: 'italienisch',
  //     caloriesTarget: 600
  //   }).subscribe(result => {
  //     console.log("Rezept erhalten:", result);
  //   });
  // }

  testN8n() {
    this.n8nCommunicationService.sendIngredients({
      ingredients: ['Tomate', 'Pasta'],
      difficulty: 'leicht',
      style: 'italienisch',
      caloriesTarget: 600
    }).subscribe(result => {
      console.log(result);
    }); 
  }

  goToRecipeResults() {
    this.router.navigate(['results/all_results']);
  }
}