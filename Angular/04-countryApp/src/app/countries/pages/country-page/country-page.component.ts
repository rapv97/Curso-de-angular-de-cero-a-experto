import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, map } from 'rxjs';
import { Country, Translation } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?: Country;
  public translations?: Translation[] = [];

  constructor( private activatedRoute:ActivatedRoute,
               private router:Router,
               private countryService: CountriesService,

  ){}

  ngOnInit(): void {
    //observable healt, un observable dentro de otro
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countryService.searchCountryByAlphaCode( id ) ),
      map<any, any>( country => {
        const translation = Object.values(country?.translations);
        return [country, translation]
      })
    )
    .subscribe( ( [country, translation] ) => {
      if ( !country ) return this.router.navigateByUrl('');
      this.country = country;
      this.translations = translation

      return
      // console.log('Tenemos pais');

      // this.searchCountry( id );


    });
  }

  // searchCountry( code: string ){

  //   this.countryService.searchCountryByAlphaCode( code )
  //     .subscribe( rs => {
  //       console.log(rs);

  //     });
  // }
}
