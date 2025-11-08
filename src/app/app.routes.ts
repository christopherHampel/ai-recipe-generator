import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { GeneratorComponent } from './generator/generator.component';
import { PreferencesComponent } from './generator/preferences/preferences.component';

export const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'generate_recipe',
    component: GeneratorComponent,
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
  },
];
