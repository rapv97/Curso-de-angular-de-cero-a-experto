import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { catchError, delay, map, Observable, of, pipe, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  public cacheStore: CacheStore = {
    byCapital:  { term: '', countries: []},
    byCountries:{ term: '', countries: []},
    byRegion:   { term: '', countries: []},
  }

  constructor( private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private getCountriesRequest(  url: string ):Observable<Country[]>{

    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of( [] ))
    )
  }

  searchByCapital( capital:string ):Observable<Country[]>{

    //name/name  region/region
    // return this.http.get<Country[]>(`${this.apiUrl}capital/${capital}`)
    const url = `${this.apiUrl}capital/${capital}`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term: capital, countries }),
      tap( () => this.saveLocalStorage())
    );
    /* rxjs
 el of de rxjs sirve para construir otro observable basado en el argumento que se le mande
    */
    // .pipe(
    //   catchError( error =>  of( [] ))
        // console.log(error);


      // tap( countries => console.log("paso por el tap ", countries) ),
      // map( cts => [])
    // );

  }

  searchByCountry( country: string ): Observable<Country[]>{

    const url = `${this.apiUrl}name/${country}`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( countries => this.cacheStore.byCountries= { term: country, countries}),
      tap( () => this.saveLocalStorage())
    );

  }

  searchByRegion( region: Region ): Observable<Country[]>{
    const url = `${this.apiUrl}region/${region}`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( regions => this.cacheStore.byRegion = { term: region, countries: regions}),
      tap( () => this.saveLocalStorage())
    );
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null>{

    return this.http.get<Country[]>(`${this.apiUrl}alpha/${code}`)
    .pipe(
      map( countries =>  countries.length > 0 ? countries[0] : null ),
        catchError( error => of( null ))
    );
  }

  private saveLocalStorage(){
    localStorage.setItem('cacheStore',  JSON.stringify( this.cacheStore ) );
  }
  private loadFromLocalStorage(){
    if( !localStorage.getItem('cacheStore')) return;

      this.cacheStore = JSON.parse (localStorage.getItem('cacheStore')!);
  }
}
