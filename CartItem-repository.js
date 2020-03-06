const uuid = require("uuid");
let cart_items = [
    {
        cartItem_id: uuid.v4(),
        cart_id: "mnbvcxza-1223-1234-3456-asdfghjk",
        item_id: "lkjhgfds-erty-hgfd-cnvz-15467854",
        quantity: 500
    }
];

const selectCartItems = () => ({
    rows:cartItems,
    error: new Error(),
    driver: "postgres"
});

const selectCartItemByCartItemId = cartItemId =>
    cartItems.find(cartItem => cartItem["cartItem_id"]===cartItemId);
const selectCartItemsByCartId = cartId => ({
    rows: cartItems.filter(cartItem => cartItem["cart_id"]===cartId)
});
module.exports = {
    selectCartItems,
    selectCartItemsByCartItemId,
    selectCartItemsByCartId
};