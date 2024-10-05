import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit , OnDestroy{




// El subject es un tipo especial de observable

  private debouncer: Subject<string> = new Subject<string>();
  // @ViewChild('txtSearch')
  // public inputSearch!: ElementRef<HTMLInputElement>


  private debouncerSuscription?: Subscription;

//para recibir del padre
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

//para mandar al padre
  @Output()
  // public onValueEmt:EventEmitter<string> = new EventEmitter();
  public onValue = new EventEmitter<string>();

  @Output()
  // public onValueEmt:EventEmitter<string> = new EventEmitter();
  public onDebunce = new EventEmitter<string>();

  ngOnInit(): void {
   this.debouncerSuscription = this.debouncer
    .pipe(
      //primer parametro obligatorio para saber cuanto esperar para hacer la emision
      //segundo scheduler para cuando ejecutarlo
      debounceTime(500)
      //si al pasar un segundo ya no se escribio nada por parte del usuario se hace la consulta o se manda el valor al subscribe
    )

    .subscribe( value => {
      this.onDebunce.emit( value);

    });
  }

  //para eliminar subscripciones al destruir el componente, es decir de pasar de uno a otro
  //para mantener memoria observables al minimo, cuando no se necesita se destruye
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  // ngOnInit(): void {
  //   this.debouncer
  //   .pipe(
  //     //primer parametro obligatorio para saber cuanto esperar para hacer la emision
  //     //segundo scheduler para cuando ejecutarlo
  //     debounceTime(500)
  //     //si al pasar un segundo ya no se escribio nada por parte del usuario se hace la consulta o se manda el valor al subscribe
  //   )

  //   .subscribe( vl => {
  //     console.log("debouncer ", vl);

  //   })
  // }

//en el keyup.enter del input mandamos a llamar este metodo para pasar el valor al onValue
  emitValue( value: string):void{
    this.onValue.emit(value)
  }

  //para implementar debouncer para que al momento que el usuario deje de escribir, lanzar la peticion
  onKeypress( term:string){
    this.debouncer.next( term );

  }

}
