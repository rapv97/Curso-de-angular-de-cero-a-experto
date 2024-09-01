

export interface Passenger {
  name: string;
  children?: string [];


}

const passenger1 : Passenger = {
    name: 'Richarson'
}

const passenger2 : Passenger = {
    name: 'Melissa',
    children: [' Natalia ', ' Elizabeth ']
}

const printChildren = ( passenger : Passenger) => {

    // OPTIONAL CHAININ SE OCUPA PARA VERIFICAR SI EXISTE VALOR EN LA PROPIEDAD, SI NO EXISTE ES UNDEFINED
   //si es no tiene el dato indicara que es 0
    const howManyChIlder = passenger.children?.length  || 0;
    // const howManyChIlder = passenger.children!.length;

    //not null axception operator !

    console.log(passenger.name, howManyChIlder);
};

    
    


printChildren ( passenger1 );