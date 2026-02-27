import { Component } from '@angular/core';
import { HeaderTopComponent } from "../header-top/header-top.component";
import { HeaderTopGreenComponent } from "../header-top-green/header-top-green.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-preference-page',
  imports: [HeaderTopGreenComponent, FormsModule],
  templateUrl: './choose-preference-page.component.html',
  styleUrl: './choose-preference-page.component.scss',
})
export class ChoosePreferencePageComponent {


 chosenPreferences = {
    portions: 1,
    people: 1,
    cookingTime: '', // 'quick', 'medium', 'complex'
    cuisine: '',     // z.B. 'german', 'italian', ...
    diet: 'no-preferences'
  };

  currentPortions = 1;
  currentPersons = 1;

  increasePortionsNumber() {
    this.currentPortions++;
    this.chosenPreferences.portions = this.currentPortions;
  }

  decreasePortionsNumber() {
    if (this.currentPortions > 1) this.currentPortions--;
    this.chosenPreferences.portions = this.currentPortions;
  }

  increasePersonsNumber() {
    this.currentPersons++;
    this.chosenPreferences.people = this.currentPersons;
  }

  decreasePersonsNumber() {
    if (this.currentPersons > 1) this.currentPersons--;
    this.chosenPreferences.people = this.currentPersons;
  }

  generateRecipe() {
    console.log(this.chosenPreferences);
 
  }


}
