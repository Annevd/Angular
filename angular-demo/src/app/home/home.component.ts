import { Component } from '@angular/core';
import { CardComponent } from "../components/card/card.component";
import { CurrentWeatherComponent } from "../current-weather/current-weather.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, CurrentWeatherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}