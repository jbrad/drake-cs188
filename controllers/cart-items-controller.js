const {
    getAllCartItems,
    getCartItemByCartItemId,
    getCartItemsByCartId
} = require('../services/cart-item-service');

const getCartItemByCartItemIdRoute = (server) => {
  server.route({
    handler: (request, h) => {
      const cartItem = getCartItemByCartItemId(request.params.cartItemId);

      if (!cartItem) {
        return h.response().code(404);
      }

      return cartItem;
    },
    method: 'GET',
    path: '/cart-items/{cartItemId}'
  });
};

const getCartItemsRoute = (server) => {
  server.route({
    handler: () => getAllCartItems(),
    method: 'GET',
    path: '/cart-items'

  });
};

const getCartItemsByCartIdRoute = (server) => {
  server.route({
    handler: (request, h) => {
      const cartItem = getCartItemsByCartId(request.params.cartId);

      if (!cartItem) {
        return h.response().code(404);
      }

      return cartItem;
    },
    method: 'GET',
    path: '/cart/cartId/cart-items'
  });
};

const initCartItemControllers = (server) => {
  getCartItemsRoute(server);
  getCartItemByCartItemIdRoute(server);
  getCartItemsByCartIdRoute(server);
};

module.exports = {
  initCartItemControllers
};
