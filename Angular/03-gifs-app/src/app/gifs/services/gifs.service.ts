import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const  giphyKey:string = '8odsj11BHok78G9mNvq1VZExb8cKd224';
const url:string = 'https://api.giphy.com/v1/gifs/';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];
  private taxHistory: string[] = [];
  // private giphyKey:string = '8odsj11BHok78G9mNvq1VZExb8cKd224';

  constructor( private http:HttpClient) {
    this.loadLocalStorage();

   }

  getTaxHistory(){
    return [ ...this.taxHistory ];
  }

  searchTag(tag: string):void {

    if (tag.length === 0) return;

    this.organizeHistory( tag );


    const params = new HttpParams()
    .set('api_key', giphyKey)
    .set('limit', 10)
    .set('q', tag);

    this.http.get<SearchResponse>(`${url}search`,{ params })
    .subscribe( resp => {
      console.log(resp);
      this.gifList = resp.data

    })

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=8odsj11BHok78G9mNvq1VZExb8cKd224&q=Luffy&limit=10')
    // .then(resp => resp.json())
    // .then(data => console.log(data)
    // )
  }

  private saveLStorage( ):void{
    localStorage.setItem('history', JSON.stringify(this.taxHistory));
  }

  private loadLocalStorage(){
    localStorage.getItem('history');

    if (!localStorage.getItem('history')) return;

    this.taxHistory= JSON.parse (localStorage.getItem('history') ! );

    if (this.taxHistory.length === 0) return;

    this.searchTag(this.taxHistory[0]);

  }



  private organizeHistory( tag: string){

    tag = tag.toLocaleLowerCase();

    if ( this.taxHistory.includes(tag) ) {
      this.taxHistory = this.taxHistory.filter( ( tg ) => tg !== tag);
    }

    this.taxHistory.unshift(tag);
    this.taxHistory = this.taxHistory.splice(0,10);

    this.saveLStorage();

  }

}


