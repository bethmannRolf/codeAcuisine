import { Component } from '@angular/core';
import { HeaderTopComponent } from "../header-top/header-top.component";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-loading-screen',
  imports: [HeaderTopComponent, LoadingSpinnerComponent],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss',
})
export class LoadingScreenComponent {

}
