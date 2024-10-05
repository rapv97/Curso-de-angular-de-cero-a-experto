import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

public regions: Country[] = [];
public regionsAvailable: Region[] = ['Africa', 'Asia', 'Americas', 'Europe', 'Oceania',]
public selectedRegion?: Region;

constructor( private regionService:CountriesService){}


  ngOnInit(): void {
    this.regions = this.regionService.cacheStore.byRegion.countries;
    this.selectedRegion = this.regionService.cacheStore.byRegion.term;
  }

searchRegion( region: Region) {
  this.selectedRegion = region
 this.regionService.searchByRegion( region ).subscribe( rs => {
  this.regions = rs
 })

}

}
