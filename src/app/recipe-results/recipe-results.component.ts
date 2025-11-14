import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { SingleResultComponent } from "./single-result/single-result.component";

@Component({
  selector: 'app-recipe-results',
  imports: [HeaderComponent, SingleResultComponent],
  templateUrl: './recipe-results.component.html',
  styleUrl: './recipe-results.component.scss'
})
export class RecipeResultsComponent {
}
