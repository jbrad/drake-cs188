const {
    selectCartItems,
    selectCartItemsByCartItemId,
    selectCartItemsByCartId
} = require('../repositories/cart-items-repository');

const mapToModel = (cartItem) => ({
    cartId: cartItem['cart_id'],
    cartItemId: cartItem['cart_item_id'],
    itemId: cartItem['item_id'],
    quantity: cartItem['quantity']
});

const getAllCartItems = () => {
    const {rows} = selectCartItems();

    return rows.map(mapToModel);
};

const getCartItemByCartItemId = (cartItemId) => {
    const cart = selectCartItemsByCartItemId(cartItemId);

    return mapToModel(cart);
};

const getCartItemsByCartId = (cartId) => {
    const {rows} = selectCartItemsByCartId(cartId);

    return rows.map(mapToModel);
};

module.exports = {
    getAllCartItems,
    getCartItemByCartItemId,
    getCartItemsByCartId
};
