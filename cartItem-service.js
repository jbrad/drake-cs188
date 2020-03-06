const {
    selectCartItems,
    selectCartItemsByCartItemId,
    selectCartItemsByCartId
} = require("../repositories/cartItems-repository");

const mapToModel = cartItem => ({
    cartItemId: cartItem["cart_item-id"],
    cartId: cartItem["cart_id"],
    item: cartItem["item_id"],
    quantity: cartItem["quantity"]
});

const getAllCartItems = () => {
    const {rows} = selectCartItems();
    return rows.map(mapToModel);
};

const getCartItemByCartItemId = cartItemId => {
    const cart = selectCartItemsByCartItemId(cartItemId);
    return  mapToModel(cart);
};

const getCartItemsByCartId = cartId => {
    const {rows} = selectCartItemsByCartId(cartId);
    return rows.map(mapToModel);
};

module.exports = {
    getAllCartItems,
    getCartItemByCartItemId,
    getCartItemsByCartId
};
