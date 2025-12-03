import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate',
  imports: [],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss',
})
export class GenerateComponent {
  private router = inject(Router);

  ngOnInit() {
    // setTimeout(() => {
    //   this.router.navigate(['/results/all_results']);
    // }, 3000);
  }
}
