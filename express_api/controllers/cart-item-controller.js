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
    server.get("/cart-items", (req, res) => {
        res.send(getAllCartItems())
        console.log('logged');
        
    }
    );
};


const addCartItemsRoute = (server) => {
    server.post("/cart-items", (req, res) => {
        const item = req.body;
        addCartItem(item);
        res.status(201);
        console.log("added");
    }
    );
};






const modifyCartItemRoute = (server) => {
    server.put("/cart-items/:cartItemId", (req, res) => {
        modifyCartItem(req.body);

        res.send('')
    }
    );
};



const deleteCartItemRoute = (server) => {
    server.delete("/cart-items/:cartItemId", (req, res) => {
        removeCartItemByCartItemId(req.params.cartItemId);

        res.send('')
        output.log("invoked")
    }
    );
};

const getCartItemByCartItemIdRoute = (server) => {
    server.get("/cart-items/:cartItemId", (req, res) => {
        const cartItem = getCartItemByCartItemId(req.params.cartItemId);
        res.send(cartItem)
    }
    );
};


const getCartItemsByCartIdRoute = (server) => {
    server.get("/carts/:cartId/cart-items", (req, res) => {
        const cart = getCartByCartId(req.params.cartId);
        if (!cart) {
            res.status(404);
        }
        
        
        res.send(getCartItemsByCartId(req.params.cartId));
    }
    );
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
