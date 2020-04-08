const {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId,
    insertCart,
    updateCart,
    deleteCartByCartId
} = require('../repositories/cart-repository');

const mapToModel = (cart) => ({
    cartId: cart['cart_id'],
    customerId: cart['customer_id']
});

const mapToDTO = (cart) => ({
    'cart_id': cart.cartId,
    'customer_id': cart.customerId
});

const getAllCarts = () => {
    const {rows} = selectCarts();

    return rows.map(mapToModel);
};

const getCartByCartId = (cartId) => {
    const cart = selectCartByCartId(cartId);

    if (!cart) {
        return null;
    }

    return mapToModel(cart);
};

const getCartsByCustomerId = (customerId) => {
    const {rows} = selectCartsByCustomerId(customerId);

    return rows.map(mapToModel);
};

const addCart = (cart) => insertCart(mapToDTO(cart));
const modifyCart = (cart) => updateCart(mapToDTO(cart));
const removeCartByCartId = (cartId) => deleteCartByCartId(cartId);

module.exports = {
    addCart,
    getAllCarts,
    getCartByCartId,
    getCartsByCustomerId,
    modifyCart,
    removeCartByCartId
};
