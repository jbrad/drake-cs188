const {
    getAllItems,
    getItemByItemId,
    addItem,
    modifyItem,
    removeItemByItemId
} = require('../services/item-service');

const getItemsRoute = (server) => {
    server.get("/items", (req, res) => {
        res.send(getAllItems())
    }
    );
};

const addItemsRoute = (server) => {
    server.post("/items", (req, res) => {
        res.send((request, h) => {
            const item = request.payload;

            addItem(item);
        })
        res.status(201)
    });
};



const modifyItemRoute = (server) => {
    server.route({
        handler: (request) => {
            modifyItem(request.payload);

            return '';
        },
        method: 'PUT',
        path: '/items/{itemId}'
    });
};

const deleteItemRoute = (server) => {
    server.route({
        handler: (request) => {
            removeItemByItemId(request.params.itemId);

            return '';
        },
        method: 'DELETE',
        path: '/items/{itemId}'
    });
};

const getItemByItemIdRoute = (server) => {
    server.get("/items/:itemId", (req, res) => {
        const customer = getItemByItemId(req.params.itemId);
        if (!customer) {
            res.status(404);
        }
        res.send(customer)
    }
    );
};


const initItemControllers = (server) => {
    getItemsRoute(server);
    getItemByItemIdRoute(server);
    addItemsRoute(server);
    modifyItemRoute(server);
    deleteItemRoute(server);
};

module.exports = {
    initItemControllers
};
