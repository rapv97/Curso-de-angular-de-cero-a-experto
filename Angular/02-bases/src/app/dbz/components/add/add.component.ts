import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  //se utiliza EventEmitter y se le especifica un tipo
  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {
// debugger;
    console.log(this.character);

    if (this.character.name.length === 0) return;
      //se pasa al output el valor del character
    this.onNewCharacter.emit({...this.character});

    this.character = {name: '' , power:0};
  }


}
