import { Injectable, signal } from '@angular/core';
import ingredientsData from '../../assets/data/ingredients.json';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private _ingredients = signal<string[]>(ingredientsData);

  ingredients = this._ingredients.asReadonly();
}