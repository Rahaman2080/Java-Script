const shoppingCart = [
    {name: 'shirt', price: 1000, quantity: 5},
    {name: 'pant', price: 1500, quantity: 4},
    {name: 'shoe', price: 2700, quantity: 2},
    {name: 'belt', price: 700, quantity: 2},
    {name: 'panjabi', price: 3000, quantity: 3},
    {name: 'paijama', price: 800, quantity: 2}
]

function cost (products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price * product.quantity;

    }
    return sum;
}
const totalCost = cost(shoppingCart);
console.log('Total cost =', totalCost, 'tk.');