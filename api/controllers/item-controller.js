const {
    getAllItems,
    getItemByItemId,
    addItem,
    modifyItem,
    removeItemByItemId
} = require('../services/item-service');

const getItemsRoute = (server) => {
    server.route({
        handler: () => getAllItems(),
        method: 'GET',
        path: '/items'
    });
};

const addItemsRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const item = request.payload;

            addItem(item);

            return h.response(item).code(201);
        },
        method: 'POST',
        path: '/items'
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
    server.route({
        handler: (request, h) => {
            const customer = getItemByItemId(request.params.itemId);

            if (!customer) {
                return h.response().code(404);
            }

            return customer;
        },
        method: 'GET',
        path: '/items/{itemId}'
    });
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
