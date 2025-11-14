import { Component } from '@angular/core';
import { SingleResultComponent } from "../single-result/single-result.component";

@Component({
  selector: 'app-all-results',
  imports: [SingleResultComponent],
  templateUrl: './all-results.component.html',
  styleUrl: './all-results.component.scss'
})
export class AllResultsComponent {

}
