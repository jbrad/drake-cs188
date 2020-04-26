const {
    getAllCartItems,
    getCartItemByCartItemId,
    addCartItem,
    modifyCartItem,
    removeCartItemByCartItemId,
    getCartItemsByCartId
} = require('../services/cart-item-service');
const {getCartByCartId} = require('../services/cart-service');

const getCartItemsRoute = (server) => {
    server.route({
        handler: () => getAllCartItems(),
        method: 'GET',
        path: '/cart-items'
    });
};

const addCartItemsRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const item = request.payload;

            addCartItem(item);

            return h.response(item).code(201);
        },
        method: 'POST',
        path: '/cart-items'
    });
};

const modifyCartItemRoute = (server) => {
    server.route({
        handler: (request) => {
            modifyCartItem(request.payload);

            return '';
        },
        method: 'PUT',
        path: '/cart-items/{cartItemId}'
    });
};

const deleteCartItemRoute = (server) => {
    server.route({
        handler: (request) => {
            removeCartItemByCartItemId(request.params.cartItemId);

            return '';
        },
        method: 'DELETE',
        path: '/cart-items/{cartItemId}'
    });
};

const getCartItemByCartItemIdRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const customer = getCartItemByCartItemId(request.params.cartItemId);

            if (!customer) {
                return h.response().code(404);
            }

            return customer;
        },
        method: 'GET',
        path: '/cart-items/{cartItemId}'
    });
};

const getCartItemsByCartIdRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const cart = getCartByCartId(request.params.cartId);

            if (!cart) {
                return h.response().code(404);
            }

            return getCartItemsByCartId(request.params.cartId);
        },
        method: 'GET',
        path: '/carts/{cartId}/cart-items'
    });
};

const initCartItemControllers = (server) => {
    getCartItemsRoute(server);
    getCartItemByCartItemIdRoute(server);
    addCartItemsRoute(server);
    modifyCartItemRoute(server);
    deleteCartItemRoute(server);
    getCartItemsByCartIdRoute(server);
};

module.exports = {
    initCartItemControllers
};
