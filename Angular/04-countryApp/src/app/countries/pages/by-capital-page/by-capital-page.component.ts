import { Component, EventEmitter, Output, viewChild, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public isLoading:boolean = false;
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor( private countriesService: CountriesService ){

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ):void{
    this.isLoading = true
    console.log(term);
    this.countriesService.searchByCapital( term )
        .subscribe( countries => {


          this.countries = countries
          console.log(this.countries);
          this.isLoading= false;

        }

    );

}
}


