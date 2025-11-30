import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { DetailHeaderComponent } from "./detail-header/detail-header.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { DirectionsComponent } from "./directions/directions.component";

@Component({
  selector: 'app-recipe-detail',
  imports: [HeaderComponent, DetailHeaderComponent, IngredientsComponent, DirectionsComponent],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

}
