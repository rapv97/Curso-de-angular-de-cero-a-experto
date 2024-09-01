


export interface Products {
    description: string;
    price:number;

}

export interface TaxCalculationOptions {
    tax:number;
    products:Products[];
}


//si son mas de 3 argumentos se deberia pasar una interfaz
export function taxCalculations( options: TaxCalculationOptions ):number[] {

    let total = 0;
    let {tax, products} = options
    
    products.forEach (product => {
        total += product.price
    });

    return [total, total * tax]
}

// function taxCalculations( { tax, products }):number[ number, number ] {

//     let total = 0;
  
//     products.forEach ( ({price}) => {
//         total += price  
//     });

//     return [total, total * tax]
// }

const phone: Products = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Products = {
    description: "iPad Air",
    price: 250.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;


const [ total, tx ] = taxCalculations( {
    products:shoppingCart,
    tax: tax,
});

console.log('Total ', total);
console.log('Tax ', tx);


