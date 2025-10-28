import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generator',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss'
})
export class GeneratorComponent {

}
