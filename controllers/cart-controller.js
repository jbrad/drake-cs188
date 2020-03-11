const {
    getAllCarts,
    getCartByCartId
} = require('../services/cart-service');

const getCartsRoute = (server) => {
    server.route({
        handler: () => getAllCarts(),
        method: 'GET',
        path: '/carts'
    });
};

const getCartByCartIdRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const cart = getCartByCartId(request.params.cartId);

            if (!cart) {
                return h.response().code(404);
            }

            return cart;
        },
        method: 'GET',
        path: '/carts/{cartId}'
    });
};

const initCartControllers = (server) => {
    getCartsRoute(server);
    getCartByCartIdRoute(server);
};

module.exports = {
    initCartControllers
};
