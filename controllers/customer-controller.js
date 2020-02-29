const {
    getAllCustomers,
    getCustomerByCustomerId
} = require('../services/customer-service');
const {getCartsByCustomerId} = require('../services/cart-service');

const getCustomersCartsRoute = (server) => {
    server.route({
        path: '/customers/{customerId}/carts',
        method: 'GET',
        handler: (request, h) => {
            const customerId = request.params.customerId;
            const customer = getCustomerByCustomerId(customerId);

            if (!customer) {
                return h.response().code(404);
            }

            return getCartsByCustomerId(customerId);
        }
    });
};

const getCustomersRoute = (server) => {
    server.route({
        path: '/customers',
        method: 'GET',
        handler: (request, h) => {
            return getAllCustomers();
        }
    });
};

const getCustomerByCustomerIdRoute = (server) => {
    server.route({
        path: '/customers/{customerId}',
        method: 'GET',
        handler: (request, h) => {
            const customer = getCustomerByCustomerId(request.params.customerId);

            if (!customer) {
                return h.response().code(404);
            }
            
            return customer;
        }
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
