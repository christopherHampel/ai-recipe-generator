import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipe-results',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './recipe-results.component.html',
  styleUrl: './recipe-results.component.scss'
})
export class RecipeResultsComponent {
}
