const {
    deleteCartItemByCartItemId,
    insertCartItem,
    selectCartItemByCartItemId,
    selectCartItems,
    updateCartItem,
    selectCartItemsByCartId
} = require('../repositories/cart-item-repository');

const mapToModel = (cartItem) => ({
    cartId: cartItem['cart_id'],
    cartItemId: cartItem['cart_item_id'],
    itemId: cartItem['item_id'],
    quantity: cartItem['quantity']
});

const mapToDTO = (cartItem) => ({
    'cart_id': cartItem.cartId,
    'cart_item_id': cartItem.cartItemId,
    'item_id': cartItem.itemId,
    'quantity': cartItem.quantity
});

const getAllCartItems = () => {
    const {rows} = selectCartItems();

    return rows.map(mapToModel);
};

const getCartItemByCartItemId = (cartItemId) => {
    const cartItem = selectCartItemByCartItemId(cartItemId);

    if (!cartItem) {
        return null;
    }

    return mapToModel(cartItem);
};

const getCartItemsByCartId = (cartId) => {
    const {rows} = selectCartItemsByCartId(cartId);

    return rows.map(mapToModel);
};

const addCartItem = (item) => insertCartItem(mapToDTO(item));
const modifyCartItem = (item) => updateCartItem(mapToDTO(item));
const removeCartItemByCartItemId = (itemId) => deleteCartItemByCartItemId(itemId);

module.exports = {
    addCartItem,
    getAllCartItems,
    getCartItemByCartItemId,
    getCartItemsByCartId,
    modifyCartItem,
    removeCartItemByCartItemId
};
