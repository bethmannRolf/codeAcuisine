import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private _ingredients = signal<string[]>([
    'Tomate',
    'Mozzarella',
    'Basilikum',
    'Knoblauch',
    'Olivenöl',
    'Zwiebel',
    'Paprika',
    'Champignons',
    'Spaghetti',
    'Parmesan',
    'Karotte',
    'Brokkoli',
    'Blumenkohl',
    'Reis',
    'Hähnchen',
    'Rindfleisch',
    'Lachs',
    'Thunfisch',
    'Ei',
    'Milch',
    'Butter',
    'Sahne',
    'Zucker',
    'Salz',
    'Pfeffer',
    'Oregano',
    'Thymian',
    'Rosmarin'
  ]);

  ingredients = this._ingredients.asReadonly();
}