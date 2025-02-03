import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CountryInfo } from './country-info';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {
  private selectedCountryDataSubject = new BehaviorSubject<CountryInfo | null>(null);
  selectedCountryData$ = this.selectedCountryDataSubject.asObservable();

  // G API service using httpclient.
  url = "https://api.worldbank.org"

  constructor(private http: HttpClient) { }
  // G.1 Returns all information from API 
  getCountryByID(countryID: string) {
    return this.http.get<any>(`${this.url}/v2/country/${countryID}?format=json`).pipe(
      map(response => {
        const countryData = response[1][0];
        const countryInfo: CountryInfo = {
          id: countryData.id,
          iso2Code: countryData.iso2Code,
          name: countryData.name,
          region: countryData.region,
          adminregion: countryData.adminregion,
          incomeLevel: countryData.incomeLevel,
          lendingType: countryData.lendingType,
          capitalCity: countryData.capitalCity,
          longitude: countryData.longitude,
          latitude: countryData.latitude
        };
        this.selectedCountryDataSubject.next(countryInfo);
        return countryInfo;
      })
    );

  }
}


