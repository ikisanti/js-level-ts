//! 04-Cart
//? "Create a function that receives an array of product objects with this structure: 
//? [
//?     { name: "T-shirt", qty: 2, price: 25 },
//?     { name: "Pants", qty: 1, price: 40 },
//?     { name: "Shoes", qty: 1, price: 60 }
//? ]
//? And returns the total due.


const products = [
    { name: "T-shirt", qty: 2, price: 25 },
    { name: "Pants", qty: 1, price: 40 },
    { name: "Shoes", qty: 1, price: 60 }
]

const cart = (products) =>
    products.reduce((acc, product) => acc + product.price * product.qty, 0);

console.log(`Total a pagar: $${cart(products)}`);
