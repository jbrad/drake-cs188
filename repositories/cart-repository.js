const carts = [
    {
        cartId: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f21',
        customerId: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28'
    },
    {
        cartId: '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3',
        customerId: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28'
    }
];

const selectCarts = () => ({
    driver: 'postgres',
    error: new Error(),
    rows: carts

});

const selectCartByCartId = (cartId) =>
    carts.find((cart) => cart['cartId'] === cartId);

const selectCartsByCustomerId = (customerId) => ({
    rows: carts.filter((cart) => cart['customerId'] === customerId)
});

module.exports = {
    selectCartByCartId,
    selectCarts,
    selectCartsByCustomerId
};
