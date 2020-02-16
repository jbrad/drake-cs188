const cartItem = require('./cartItems')
const items = require('./items');
const customers = require('./customers');
const carts = require('./carts');

const item = {
    itemID: '09a96414-19f5-4af0-ae1f-1bb688754689',
    name: 'Griff Sweater',
    description: 'Comfortable Griff Sweater',
    price: 50.00,
    sizesAvailable: ['Large', 'Medium']
};

let firstName = 'Vy';
let lastName = 'Ngo';

const customer = {
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '555-555-5555'
};

let date_today = new Date();

const cart = {
    cartID: '92b4338b-f73b-41b5-8949-046e1f1b2b10',
    belongsTo: `${firstName} ${lastName}` ,
    createdDate: date_today,
    purchaseDate: date_today
};

quantity_item = Math.floor(Math.random() * 10)

const cartItems = {
    cartID: '92b4338b-f73b-41b5-8949-046e1f1b2b10',
    whatItem: 'Griff Sweater',
    quantity: quantity_item
};

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartItems', cartItems);