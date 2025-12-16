import { Component, inject } from '@angular/core';
import { N8nCommunicationService } from '../../services/n8n-communication/n8n-communication.service';

@Component({
  selector: 'app-single-result',
  imports: [],
  templateUrl: './single-result.component.html',
  styleUrl: './single-result.component.scss',
})
export class SingleResultComponent {
  private n8nCommunicationService = inject(N8nCommunicationService);
  // recipes: string[] = ['', '', ''];

  // get recipes() {
  //   return this.n8nCommunicationService.recipes;
  // }

  get recipes() {
  const storedRecipes = localStorage.getItem('recipes');

  if (storedRecipes) {
    return JSON.parse(storedRecipes);
  }  
  }
}
