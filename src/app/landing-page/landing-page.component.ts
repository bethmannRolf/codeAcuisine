import { Component } from '@angular/core';
import { HeaderTopComponent } from "../header-top/header-top.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  imports: [HeaderTopComponent, HeaderTopComponent, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {

}
