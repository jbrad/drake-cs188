const {
    deleteCartByCartId,
    insertCart,
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId,
    updateCart
} = require('../repositories/cart-repository');

const mapToModel = (cart) => ({
    cartId: cart['cart_id'],
    customerId: cart['customer_id']
});

const mapToDTO = (cart) => ({
    'cart_id': cart.cartId,
    'customer_id': cart.customerId,
    'created_date': cart.createdDate,
    'purchased_date': cart.purchasedDate
});

const getAllCarts = () => {
    const {rows} = selectCarts();

    return rows.map(mapToModel);
};

const getCartByCartId = (cartId) => {
    const cart = selectCartByCartId(cartId);

    return mapToModel(cart);
};

const getCartsByCustomerId = (customerId) => {
    const {rows} = selectCartsByCustomerId(customerId);

    return rows.map(mapToModel);
};

const addCart = (cart) => insertCart(mapToDTO(cart));
const modifyCart = (cart) => updateCart(mapToDTO(cart));
const removeCartByCartId = (cartId) => deleteCartByCartID(cartId);

module.exports = {
    addCart,
    getAllCarts,
    getCartByCartId,
    getCartsByCustomerId,
    modifyCart,
    removeCartByCartId
};
