import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { GeneratorComponent } from './generator/generator.component';

export const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
    {
    path: 'generate_recipe',
    component: GeneratorComponent,
  },
];
