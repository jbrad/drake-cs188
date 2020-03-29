const {
    getAllCarts,
    getCartByCartId,
    addCart,
    modifyCart,
    removeCartByCartId
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

const addCartsRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const cart = request.payload;

            addCart(cart);

            return h.response(cart).code(201);
        },
        method: 'POST',
        path: '/carts'
    });
};

const modifyCartRoute = (server) => {
    server.route({
        handler: (request) => {
            modifyCart(request.payload);

            return '';
        },
        method: 'PUT',
        path: '/carts/{cartId}'
    });
};

const deleteCartRoute = (server) => {
    server.route({
        handler: (request) => {
            removeCartByCartId(request.params.cartId);

            return '';
        },
        method: 'DELETE',
        path: '/carts/{cartId}'
    });
};

const initCartControllers = (server) => {
    getCartsRoute(server);
    getCartByCartIdRoute(server);
    addCartsRoute(server);
    modifyCartRoute(server);
    deleteCartRoute(server);
};

module.exports = {
    initCartControllers
};
