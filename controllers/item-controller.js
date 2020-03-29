const {
    getAllItems,
    getItemByitemId
} = require('../services/item-service');

const getItemsRoute = (server) => {
    server.route({
        handler: () => getAllItems(),
        method: 'GET',
        path: '/items'
    });
};

const getItemByItemIdRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const item = getItemByitemId(request.params.itemId);

            if (!item) {
                return h.response().code(404);
            }

            return item;
        },
        method: 'GET',
        path: '/items/{itemId}'
    });
};

const initItemControllers = (server) => {
    getItemsRoute(server);
    getItemByItemIdRoute(server);
};

module.exports = {
    initItemControllers
};
