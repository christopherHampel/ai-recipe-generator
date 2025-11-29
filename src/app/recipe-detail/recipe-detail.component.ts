import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { DirectionsIngredientsComponent } from "./directions-ingredients/directions-ingredients.component";

@Component({
  selector: 'app-recipe-detail',
  imports: [HeaderComponent, DirectionsIngredientsComponent],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

}
