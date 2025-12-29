import { Component, Input } from '@angular/core';
import { RecipeDetail } from '../../interfaces/recipe-detail';

@Component({
  selector: 'app-detail-header',
  imports: [],
  templateUrl: './detail-header.component.html',
  styleUrl: './detail-header.component.scss'
})
export class DetailHeaderComponent {
  @Input() recipe?: RecipeDetail;

}
