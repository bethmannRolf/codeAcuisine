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


  inputValue: string = '';
  items: string[] = [];

  addItem() {
    if (this.inputValue.trim()) {
      this.items.push(this.inputValue);
      this.inputValue = ''; 
    }
  }



}