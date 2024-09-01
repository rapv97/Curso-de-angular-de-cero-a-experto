

import { Products, TaxCalculationOptions } from './06-functions-destructuring';
import { taxCalculations } from "./06-functions-destructuring";

const tax = 5;

const shoppingCart: Products[] = [
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "ipad",
        price: 150
    }

      
];

const [ total, tx ] = taxCalculations( {
    tax,
    products:shoppingCart
} )


console.log('Total con import ', total);
console.log('Tax ', tx);
