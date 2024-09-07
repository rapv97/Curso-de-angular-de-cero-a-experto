import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();
  //para recibir una propiedad de el padre
  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 100
  }];

  onDeleteCharacter( id?:string ):void{

    console.log(id);

    if (!id) return;
    this.onDelete.emit( id );

  }



}
