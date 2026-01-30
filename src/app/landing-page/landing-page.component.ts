import { Component } from '@angular/core';
import { HeaderTopComponent } from "../header-top/header-top.component";

@Component({
  selector: 'app-landing-page',
  imports: [HeaderTopComponent, HeaderTopComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {

}
