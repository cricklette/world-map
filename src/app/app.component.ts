import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { WorldbankService } from './worldbank.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorldMapComponent, CountryInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'World Map';



}



// Here write script to make api calls for country information

// When you click a country on the DOM, grab the country code from the map, then run api calls using that name to retrieve the data

// https://api.worldbank.org/V2/country/{{countryCode}}