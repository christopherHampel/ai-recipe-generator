import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss',
})
export class GeneratorComponent {

}
