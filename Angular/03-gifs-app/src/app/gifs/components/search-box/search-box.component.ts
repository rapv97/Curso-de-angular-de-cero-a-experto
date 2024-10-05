import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
              <h5>Buscar:</h5>
              <input type="text"
                     class="form-control"
                     placeholder="Buscar gifs..."
                     (keyup.enter)="searchTag()"
                     #txtInput
                     >

  `
})

export class SearchBoxComponent  {

  @ViewChild("txtInput")
  public tagInput!: ElementRef<HTMLInputElement>

  constructor( private gifSvs:GifsService) { }

  searchTag( ){
  //  if ( this.tagInput.nativeElement.value.length === 0) return;

    const newTag = this.tagInput.nativeElement.value;

    this.gifSvs.searchTag( newTag );

    this.tagInput.nativeElement.value = '';
  }


}
