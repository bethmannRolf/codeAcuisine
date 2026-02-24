// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class RecipesService {
  
// }


import { inject, Injectable } from '@angular/core';
import { 
  Firestore, 
  collection, 
  collectionData 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Recipe } from './interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private firestore = inject(Firestore);

  private recipesCollection = collection(this.firestore, 'recipes');

  getRecipes(): Observable<Recipe[]> {
    return collectionData(this.recipesCollection, {
      idField: 'id'
    }) as Observable<Recipe[]>;
  }
}