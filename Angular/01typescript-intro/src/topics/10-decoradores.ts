// un decorador es una funcion y se puede poner en clases, atributos de clases y metodos

function ClassDecorator(
    Constructor:any
){
    return class extends Constructor{
        newProperty = 'New property';
        hello = 'override';
    }
    
}


@ClassDecorator
export class SuperClass {

    public myProperty: string = 'Abc123';

    print(){
        console.log('Hola mundo');
        
    }
}

console.log( SuperClass );

const myClass = new SuperClass();

console.log(myClass);

