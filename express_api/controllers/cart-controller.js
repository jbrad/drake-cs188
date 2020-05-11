const {
    getAllCarts,
    getCartByCartId,
    addCart,
    modifyCart,
    removeCartByCartId
} = require('../services/cart-service');

const getCartsRoute = (server) => {
    server.get("/carts", (req, res) => {
        res.send(getAllCarts())
    }
    );
};



const getCartByCartIdRoute = (server) => {
    server.get("/carts/:cartId", (req, res) => {
        const cart = getCartByCartId(req.params.cartId);
        if (!cart) {
            res.status(404);
        }
        res.send(cart)
    }
    );
};


const updateCartRoute = (server) => {
    server.put("/carts/:cartId", (req, res) => {
        const cart = getCartByCartId(req.params.cartId);
        if (!cart) {
            res.status(404);
        }
        modifyCart(req.body)
        res.send('')
    }
    );
};

//const addCartRoute = (server) => {
//    server.route({
//        handler: (request, h) => {
//            const cart = request.payload;
//
//            addCart(cart);
//
//            return h.response(cart).code(201);
//        },
//        method: 'POST',
//        path: '/carts'
//    });
//};
//
//const deleteCartRoute = (server) => {
//    server.route({
//        handler: (request, h) => {
//            const {cartId} = request.params;
//
//            const cart = getCartByCartId(cartId);
//
//            if (!cart) {
//                return h.response().code(404);
//            }
//
//            removeCartByCartId(cartId);
//
//            return '';
//        },
//        method: 'DELETE',
//        path: '/carts/{cartId}'
//    });
//};
//
const initCartControllers = (server) => {
    getCartsRoute(server);
    getCartByCartIdRoute(server);
//    addCartRoute(server);
    updateCartRoute(server);
//    deleteCartRoute(server);
};

module.exports = {
    initCartControllers
};
