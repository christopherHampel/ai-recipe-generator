import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generator',
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss',
})
export class GeneratorComponent {
  isOpen = false;
  units = ['grams', 'ml', 'piece'];
  selectedUnit = 'grams';

  ingredient: string = '';
  crowd: number | null = null;
  addedIngredients: { name: string; crowd: number; unit: string }[] = [];

  // addedIngredients: any = [
  //   {
  //     name: 'Zwiebel',
  //     crowd: '2',
  //     unit: 'piece',
  //   },
  //   {
  //     name: 'Mehl',
  //     crowd: '200',
  //     unit: 'grams',
  //   },
  //   {
  //     name: 'Milch',
  //     crowd: '100',
  //     unit: 'ml',
  //   },

  //   {
  //     name: 'Milch',
  //     crowd: '100',
  //     unit: 'ml',
  //   },
  // ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectUnit(unit: string) {
    this.selectedUnit = unit;
    this.isOpen = false;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  addIngredient() {
    if (!this.ingredient || this.crowd === null) return;

    const newIngredient = {
      name: this.ingredient,
      crowd: this.crowd,
      unit: this.selectedUnit,
    };

    this.addedIngredients.push(newIngredient);

    this.ingredient = '';
    this.crowd = null;

    console.log(this.addedIngredients);
    
  }
}
