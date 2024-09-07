import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//proporciona id unicos uuid
import { v4 as uuid } from 'uuid';




@Injectable({
  //Si no se trabaja como root se debe agregar en los providers del modulo principal

  //con el root hace un singleton y lo podemos ocupar en caulquier lugar con esa misma instancia
  providedIn: 'root'
})

export class DbzService {

  public characters: Character [] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    }
  ];

  addCharacter( character:Character ):void{

    //forma tradicional
    // const newCharacter: Character ={
    //   id:uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    //con operador spred

    //con esto ...character practicamente le decimos que agregue todas las propiedad que contiene
    //al nuevo objeto
    const newCharacter: Character ={ id:uuid(), ... character}

    //agrega un nuevo elemento al final
    this.characters.push(newCharacter);

    //agrega un nuevo elemento al inicio
    // this.characters.unshift(character);
  }

  deleteCharacterById(id:string) {
    //con el numero 1 se le indica que borre nada mas ese elemento es decir el numero de indice 3
    //pero si solo ponemos index borrara todo
    // this.characters.splice(index,1);

    this.characters = this.characters.filter( ch => ch.id !== id );


  }


}
