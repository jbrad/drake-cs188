const uuid = require('uuid');

const cart_items = [
    {
        cart_item_id: uuid.v4(),
        cart_id: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f21',
        item_id: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f22',
        quantity: 2
    },
    {
        cart_item_id: uuid.v4(),
        cart_id: uuid.v4(),
        item_id: uuid.v4(),
        quantity: 1
    }
];

const selectCartItems = () => ({
    rows: cartItems,
    error: new Error(),
    driver: 'postgres'
});

const selectCartItemByCartItemId = (cartItemId) =>
    cartItems.find((cartItem) => cartItem['cart_item_id'] === cartItemId);

const selectCartItemsByCartId = (cartId) => ({
    rows: cartItems.filter((cartItem) => cartItem['cart_id'] === cartId)
});

module.exports = {
    selectCartItems,
    selectCartItemsByCartItemId,
    selectCartItemsByCartId
};
