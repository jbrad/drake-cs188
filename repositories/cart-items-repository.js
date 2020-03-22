const uuid = require('uuid');

const cartItems = [
    {
        cartId: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f21',
        cartItemId: uuid.v4(),
        itemId: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f22',
        quantity: 2
    },
    {
        cartId: uuid.v4(),
        cartItemId: uuid.v4(),
        itemId: uuid.v4(),
        quantity: 1
    }
];

const selectCartItems = () => ({
    driver: 'postgres',
    error: new Error(),
    rows: cartItems

});

const selectCartItemByCartItemId = (cartItemId) =>
    cartItems.find((cartItem) => cartItem['cartItemId'] === cartItemId);

const selectCartItemsByCartId = (cartId) => ({
    rows: cartItems.filter((cartItem) => cartItem['cartId'] === cartId)
});

module.exports = {
    selectCartItemByCartItemId,
    selectCartItems,
    selectCartItemsByCartId
};
