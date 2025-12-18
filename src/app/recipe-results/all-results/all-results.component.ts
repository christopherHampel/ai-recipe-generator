import { Component } from '@angular/core';
import { SingleResultShortviewComponent } from "../single-result-shortview/single-result-shortview.component";

@Component({
  selector: 'app-all-results',
  imports: [SingleResultShortviewComponent],
  templateUrl: './all-results.component.html',
  styleUrl: './all-results.component.scss'
})
export class AllResultsComponent {

}
