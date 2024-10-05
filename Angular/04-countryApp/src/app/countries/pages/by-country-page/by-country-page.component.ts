import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue:string = '';

  constructor( private http: CountriesService){}



  ngOnInit(): void {
    this.countries = this.http.cacheStore.byCountries.countries;
    this.initialValue = this.http.cacheStore.byCountries.term;
  }

searchByCountry(country: string) {
  this.http.searchByCountry(country).subscribe( rs => {
    this.countries = rs;

  });


}

}
