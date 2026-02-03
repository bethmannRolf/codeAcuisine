import { Component } from '@angular/core';
import { HeaderTopComponent } from "../header-top/header-top.component";
import { HeaderTopGreenComponent } from "../header-top-green/header-top-green.component";

@Component({
  selector: 'app-choose-preference-page',
  imports: [HeaderTopComponent, HeaderTopGreenComponent],
  templateUrl: './choose-preference-page.component.html',
  styleUrl: './choose-preference-page.component.scss',
})
export class ChoosePreferencePageComponent {

}
