const carts = [
    {
        'cart_id': '44ef41f4-485b-44d6-8635-7418e026be89',
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28'
    },
    {
        'cart_id': '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3',
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28'
    }
];

const selectCarts = () => ({
    rows: carts
});

const selectCartByCartId = (cartId) =>
    carts.find((cart) => cart['cart_id'] === cartId);

const selectCartsByCustomerId = (customerId) => ({
    rows: carts.filter((cart) => cart['customer_id'] === customerId)
});

module.exports = {
    selectCartByCartId,
    selectCarts,
    selectCartsByCustomerId
};
