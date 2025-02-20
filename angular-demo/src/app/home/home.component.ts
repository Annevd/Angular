import { Component } from '@angular/core';
import { CardComponent } from "../components/card/card.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}