import { Component } from '@angular/core';
import { IngredientsPopUpComponent } from "../ingredients-pop-up/ingredients-pop-up.component";

@Component({
  selector: 'app-dummy-page',
  imports: [IngredientsPopUpComponent],
  templateUrl: './dummy-page.component.html',
  styleUrl: './dummy-page.component.scss',
})
export class DummyPageComponent {

}
