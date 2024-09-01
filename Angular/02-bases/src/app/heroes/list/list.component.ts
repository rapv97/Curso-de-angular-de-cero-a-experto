import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


    public heroName: string[] = ['Spiderman', 'hulk', 'Ironman', 'She Hulk', 'Thor'];
    public deletedHero?: string;

    removeLatHeroe():void{
      this.deletedHero = this.heroName.pop();
    }

}
