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
  inputAmount: number | null = null;
  inputUnit: string = 'gram';
  items: {
    name: string;
    amount: number;
    unit: string
          }[] = [];

  addItem() {
    if (
      this.inputIngredient.trim() &&
      this.inputAmount !== null &&
      this.inputUnit.trim()

    ) {
      this.items.unshift({
        name: this.inputIngredient,
        amount: this.inputAmount,
        unit: this.inputUnit

      });

      this.inputIngredient = '';
      this.inputAmount = null;
      this.inputUnit = 'gram';
    }
  }


  deleteIngredient(index: number) {
    this.items = this.items.filter((_, i) => i !== index);
  }


  editIngredient() { }





}