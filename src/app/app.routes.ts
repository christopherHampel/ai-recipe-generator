import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { GeneratorComponent } from './generator/generator.component';
import { PreferencesComponent } from './generator/preferences/preferences.component';
import { IngredientsComponent } from './generator/ingredients/ingredients.component';
import { RecipeResultsComponent } from './recipe-results/recipe-results.component';
import { GenerateComponent } from './recipe-results/generate/generate.component';
import { AllResultsComponent } from './recipe-results/all-results/all-results.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'generate_recipe',
    component: GeneratorComponent,
    children: [
      {
        path: 'ingredients',
        component: IngredientsComponent,
      },
      {
        path: 'preferences',
        component: PreferencesComponent,
      },
    ],
  },
  {
    path: 'results',
    component: RecipeResultsComponent,
    children: [
      {
        path: 'generating',
        component: GenerateComponent,
      },
      {
        path: 'all_results',
        component: AllResultsComponent,
      },
    ],
  },
  {
    path: 'recipe_detail',
    component: RecipeDetailComponent,
  },
];
