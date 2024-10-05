import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {
public hasLoaded: boolean = false;

@Input()
public url!:string;

@Input()
public alt:string = '';

ngOnInit(): void {
  if(!this.url) throw new Error('Url required');

}

onLoad(){
  setTimeout(() =>{

  }, 1000);

  this.hasLoaded=true;

}

}
