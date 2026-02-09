import { Component } from '@angular/core';
import { HeaderTopGreenComponent } from "../header-top-green/header-top-green.component";
import { HeaderTopComponent } from '../header-top/header-top.component';

@Component({
  selector: 'app-recipe-results-page',
  imports: [HeaderTopComponent],
  templateUrl: './recipe-results-page.component.html',
  styleUrl: './recipe-results-page.component.scss',
})
export class RecipeResultsPageComponent {

}
