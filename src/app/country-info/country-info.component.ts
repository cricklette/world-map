import { Component, OnInit } from '@angular/core';
import { WorldbankService } from '../worldbank.service';
import { CountryInfo } from '../country-info';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})
export class CountryInfoComponent implements OnInit {
  countryData: CountryInfo | null = null;

  constructor(private worldbankService: WorldbankService) {}

  // G.2. triggers service and stores data into countryData
  ngOnInit() {
    this.worldbankService.selectedCountryData$.subscribe(data => {
      this.countryData = data;
    });
  }
}