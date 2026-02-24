import { Component } from '@angular/core';
import { HeaderTopGreenComponent } from "../header-top-green/header-top-green.component";
import { SingleRecipeLineComponent } from "../single-recipe-line/single-recipe-line.component";

@Component({
  selector: 'app-country-page',
  imports: [HeaderTopGreenComponent, SingleRecipeLineComponent],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss',
})
export class CountryPageComponent {

}
