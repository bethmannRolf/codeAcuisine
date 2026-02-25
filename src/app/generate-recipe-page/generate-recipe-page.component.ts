import { Component } from '@angular/core';
import { HeaderTopGreenComponent } from "../header-top-green/header-top-green.component";
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-recipe-page',
  imports: [HeaderTopGreenComponent, RouterLink, FormsModule],
  templateUrl: './generate-recipe-page.component.html',
  styleUrl: './generate-recipe-page.component.scss',
})


export class GenerateRecipePageComponent {


  inputIngredient: string = '';
  inputAmount: string ='';
  inputUnit: string = 'gram';
  items: {name: string; amount: string; unit: string


  } [] = [];

addItem() {
  if (
    this.inputIngredient.trim() &&
    this.inputAmount.trim() &&
    this.inputUnit.trim()
  ) {
    this.items.push({
      name: this.inputIngredient,
      amount: this.inputAmount,
      unit: this.inputUnit
    });

    this.inputIngredient = '';
    this.inputAmount = '';
    this.inputUnit = 'gram'; // optional zurücksetzen
  }
}


deleteIngredient(index: number) {
  this.items = this.items.filter((_, i) => i !== index);
}    


}