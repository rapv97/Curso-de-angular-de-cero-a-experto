
export class Person {
    
    // public name: string;
    // public address: string;

    // constructor ( name: string, address:string ){
    //     this.name    = name;
    //     this.address = address;
    // }

    constructor ( public name: string,  private address:string = 'No address'){
        
    }
    
}

/*extender una clase para incorporar las propiedades de person en hero y
posterior incorporar mas propiedades para hero
*/
class hero{

    
    //por ser extendida se debe llamar Super() para llamar el constructor del padre
    constructor( public alterEgo: string,
                public age: number,
                public realName: string,
                public person : Person
    ){

       
    }
}

const tony = new Person( ' Ironman ', 'NY' );
const ironman = new hero( ' Ironman ',45, 'Tony', tony );

console.log(ironman);
