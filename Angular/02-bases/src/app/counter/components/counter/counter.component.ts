
import { Component } from "@angular/core";

/*para hacer componente a la clase se usa el decorador

cuando creamos el componente debemos registrarlo en el modulo para que sea reconocido
 necesita ser parte del modulo


 Despues de crear el archivo dentro de la carpeta
 se puede hacer tambien con el snippet a-component para crear la clase

*/
// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>'
// })
// export class CounterComponent {


// }

// import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

      <h3> Counter: {{ counter }}</h3>


    <button (click)="increaseBy(1)"> +1</button>
    <button (click)="reset()"> Reset</button>
    <button (click)="increaseBy(-1)"> -1</button>

  `
})

export class CounterComponent{

  public counter: number = 10;
  increaseBy ( value: number) {

    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }


}
