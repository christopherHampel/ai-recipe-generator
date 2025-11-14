import { Component } from '@angular/core';

@Component({
  selector: 'app-single-result',
  imports: [],
  templateUrl: './single-result.component.html',
  styleUrl: './single-result.component.scss'
})
export class SingleResultComponent {
    recipes: string[] = ['', '', ''];
}
