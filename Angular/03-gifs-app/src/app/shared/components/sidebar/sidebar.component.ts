import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public listItems: string[] =[];
  constructor( private gifsSvs: GifsService){


  }

  get tagHistory(){
    return this.gifsSvs.getTaxHistory();
  }

  search(gif: string){
    this.gifsSvs.searchTag(gif);

  }


}
