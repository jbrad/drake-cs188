const {
    getAllCarts,
    getCartByCartId
} = require('../services/cart-service');

const getCartsRoute = (server) => {
    server.route({
        path: '/carts',
        method: 'GET',
        handler: (request, h) => {
            return getAllCarts();
        }
    });
};

const getCartByCartIdRoute = (server) => {
    server.route({
        path: '/carts/{cartId}',
        method: 'GET',
        handler: (request, h) => {
            const cart = getCartByCartId(request.params.cartId);

            if (!cart) {
                return h.response().code(404);
            }

            return cart;
        }
    });
};

const initCartControllers = (server) => {
    getCartsRoute(server);
    getCartByCartIdRoute(server);
};

module.exports = {
    initCartControllers
};
