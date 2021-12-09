// getting total sum price of the array of objects below
const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'tShirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'iPhone', price: 55000, quantity: 1 }
];


function totalPrice(cart) {
    let cartTotal = 0;

    for (const product of cart) {
        const productTotalPrice = product.price * product.quantity;
        cartTotal = cartTotal + productTotalPrice;
    }
    return cartTotal;
}


const getTotalCartPrice = totalPrice(cart);
console.log(getTotalCartPrice);