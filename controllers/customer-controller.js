const {
    getAllCustomers,
    getCustomerByCustomerId
} = require('../services/customer-service');
const {getCartsByCustomerId} = require('../services/cart-service');

const getCustomersCartsRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const customerId = request.params.customerId;
            const customer = getCustomerByCustomerId(customerId);

            if (!customer) {
                return h.response().code(404);
            }

            return getCartsByCustomerId(customerId);
        },
        method: 'GET',
        path: '/customers/{customerId}/carts'
    });
};

const getCustomersRoute = (server) => {
    server.route({
        handler: () => getAllCustomers(),
        method: 'GET',
        path: '/customers'
    });
};

const getCustomerByCustomerIdRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const customer = getCustomerByCustomerId(request.params.customerId);

            if (!customer) {
                return h.response().code(404);
            }

            return customer;
        },
        method: 'GET',
        path: '/customers/{customerId}'
    });
};

const initCustomerControllers = (server) => {
    getCustomersRoute(server);
    getCustomerByCustomerIdRoute(server);
    getCustomersCartsRoute(server);
};

module.exports = {
    initCustomerControllers
};
