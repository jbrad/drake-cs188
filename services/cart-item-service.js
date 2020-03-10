const {
    selectCartItems,
    selectCartItemsByCartItemId,
    selectCartItemsByCartId
} = require('../repositories/cart-items-repository');

const mapToModel = (cartItem) => ({
    cartItemId: cartItem['cart_item_id'],
    cartId: cartItem['cart_id'],
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

const getCartItemByCartId = (cartId) => {
    const {rows} = selectCartItemsByCartId(cartId);

    return rows.map(mapToModel);
};

module.exports = {
    getAllCartItems,
    getCartItemByCartItemId,
    getCartItemsByCartId
};
