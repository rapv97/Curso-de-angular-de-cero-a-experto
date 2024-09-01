



function addNumbers ( a:number, b:number ):number{
    return a + b;
}


const addNomber2 = ( a:number, b:number ):string => {
    return `${ a + b }`;

}


function multiply( firstNumber:number, secondNumber?:number, base:number = 2 ){

    return firstNumber * base;
}

const result = addNumbers( 1, 2 );
const result2 = addNomber2( 1, 2 );
const resultMultiply = multiply(5);

console.log({result, result2, resultMultiply});



interface Character {
    name:string;
    hp:number;
    showHp: () => void;
}



const heal = ( character: Character, amount: number ) =>{

    character.hp += amount;
}


const Strider: Character = {
    name: 'Strider',
    hp: 50 ,
    showHp(){
        console.log(`Punto de vida ${ this.hp }`);
        
    },
}

Strider.showHp();


heal(Strider, 40);

Strider.showHp();

export {};