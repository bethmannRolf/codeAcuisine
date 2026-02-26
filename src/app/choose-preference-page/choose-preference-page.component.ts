import { Component } from '@angular/core';
import { HeaderTopComponent } from "../header-top/header-top.component";
import { HeaderTopGreenComponent } from "../header-top-green/header-top-green.component";

@Component({
  selector: 'app-choose-preference-page',
  imports: [ HeaderTopGreenComponent],
  templateUrl: './choose-preference-page.component.html',
  styleUrl: './choose-preference-page.component.scss',
})
export class ChoosePreferencePageComponent {



currentPersons:number = 1;

currentPortions:number = 1;


increasePortionsNumber(){
  this.currentPortions++;
}

decreasePortionsNumber(){
  if (this.currentPortions > 1) {
  this.currentPortions--;
}
}



increasePersonsNumber(){

  this.currentPersons++;

}

decreasePersonsNumber(){
if (this.currentPersons > 1) {
  this.currentPersons--;
}


}







}
