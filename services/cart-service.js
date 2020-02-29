const {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId
} = require('../repositories/cart-repository');

const mapToModel = (cart) => ({
    cartId: cart['cart_id'],
    customerId: cart['customer_id'],
    createdDate: cart['created_date'],
    purchasedDate: cart['purchased_date']
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

module.exports = {
    getAllCarts,
    getCartByCartId,
    getCartsByCustomerId
};
