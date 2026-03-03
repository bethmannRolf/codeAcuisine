import { Component, inject } from '@angular/core';
import { HeaderTopGreenComponent } from "../header-top-green/header-top-green.component";
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { signal, computed } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';


@Component({
  selector: 'app-generate-recipe-page',
  imports: [HeaderTopGreenComponent, RouterLink, FormsModule],
  templateUrl: './generate-recipe-page.component.html',
  styleUrl: './generate-recipe-page.component.scss',
})


export class GenerateRecipePageComponent {

  private ingredientService = inject(IngredientService);



  allIngredients = this.ingredientService.ingredients;

 

filteredIngredients = computed(() => {
  const value = this.inputIngredient().toLowerCase();
  if (value.length < 2) return [];

  return this.allIngredients()
    .filter(i => i.toLowerCase().startsWith(value))
    .slice(0, 10); // 11 suggesttions at the moment , maybe 5 later
});


  selectIngredient(ingredient: string) {
    this.inputIngredient.set(ingredient);
  }




  inputIngredient = signal('');
  inputAmount: number | null = null;
  inputUnit: string = 'gram';
  items: {
    name: string;
    amount: number;
    unit: string
  }[] = [];




  // addItem() {   // ng model before signal, but how shouuld i bring it to the right side ?
  //   if (
  //     this.inputIngredient.trim() &&
  //     this.inputAmount !== null &&
  //     this.inputUnit.trim()

  //   ) {
  //     this.items.unshift({
  //       name: this.inputIngredient,
  //       amount: this.inputAmount,
  //       unit: this.inputUnit

  //     });

  //     this.inputIngredient = '';
  //     this.inputAmount = null;
  //     this.inputUnit = 'gram';
  //   }
  // }

  addItem() {
    if (
      this.inputIngredient().trim() &&
      this.inputAmount !== null &&
      this.inputUnit.trim()
    ) {
      this.items.unshift({
        name: this.inputIngredient(),
        amount: this.inputAmount,
        unit: this.inputUnit
      });

      this.inputIngredient.set('');
      this.inputAmount = null;
      this.inputUnit = 'gram';
    }
  }

  updateIngredient(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputIngredient.set(value);
  }





  deleteIngredient(index: number) {
    this.items = this.items.filter((_, i) => i !== index);
  }


  editIngredient() { }





}