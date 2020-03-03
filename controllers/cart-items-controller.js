const {
  getAllCartItems,
  getCartItemByCartItemId,
  getCartItemsByCartId
} = require("../services/cart-item-service");

const getCartItemByCartItemIdRoute = server => {
  server.route({
    path: "/cart-items/{cartItemId}",
    method: "GET",
    handler: (request, h) => {
      const cartItem = getCartItemByCartItemId(request.params, cartItemId);

      if (!cartItem) {
        return h.response().code(404);
      }

      return cartItem;
    }
  });
};

const getCartItemsRoute = server => {
  server.route({
    path: "/cart-items",
    method: "GET",
    handler: (request, h) => {
      return getAllCartItems();
    }
  });
};

const getCartItemsByCartId = server => {
  server.route({
    path: "/cart/cartId/cart-items",
    method: "GET",
    handler: (request, h) => {
      const cartItem = getCartItemsByCartId(request.params.cartId);

      if (!customer) {
        return h.response().code(404);
      }

      return cartItem;
    }
  });
};

const initCustomerControllers = server => {
  getCartItemsRoute(server);
  getCartItemByCartItemIdRoute(server);
  getCartItemsByCartIdRoute(server);
};

module.exports = {
  initCartItemControllers
};
