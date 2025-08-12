const cart = [
    { name: "Shirt", quantity: 2, price: 25 },
    { name: "Pants", quantity: 1, price: 40 },
    { name: "Shoes", quantity: 1, price: 60 }
];

const total = cart.reduce((accumulator, product) => {
    return accumulator + (product.quantity * product.price);
}, 0);

console.log(`Total to pay: $${total}`);
