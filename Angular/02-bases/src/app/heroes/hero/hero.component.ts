import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name       :string = 'ironman';
  public age        :number = 45;
  // public showBtnName:boolean

  /*one way data binding

  Tiene un enlazado en la que las propiedad de el componente tiene el poder sobre el valor en el html {{ name }}
  angular tiene two data binding por lo que del html tambien podria cambiar hacia el component.ts
  se debe utilizar solo el one way data binding y evitar en cuanto sea posible el two
  */




  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return  `${this.name} - ${this.age}`
  }

  changeHeroe():void{
    this.name = 'Luffy';
  }

  changeAge():void{
      this.age = 19;
  }

  reset():void{
    this.name = 'Ironman';
    this.age  = 45;
  }

}
