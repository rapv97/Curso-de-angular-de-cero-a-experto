import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  // public characters:Character[] = [];

  //inyectamos la dependencia del service
  //debe ser privado
  constructor( private dbzService: DbzService){


  }

  get characters():Character[] {

    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void{
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character:Character ):void{
    this.dbzService.addCharacter(character);
  }





}
