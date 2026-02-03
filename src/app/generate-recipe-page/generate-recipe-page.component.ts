import { Component } from '@angular/core';
import { HeaderTopGreenComponent } from "../header-top-green/header-top-green.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-generate-recipe-page',
  imports: [HeaderTopGreenComponent, RouterLink],
  templateUrl: './generate-recipe-page.component.html',
  styleUrl: './generate-recipe-page.component.scss',
})
export class GenerateRecipePageComponent {

}
