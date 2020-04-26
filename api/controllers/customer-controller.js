const {
    getAllCustomers,
    getCustomerByCustomerId,
    addCustomer,
    modifyCustomer,
    removeCustomerByCustomerId
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

const addCustomersRoute = (server) => {
    server.route({
        handler: (request, h) => {
            const customer = request.payload;

            addCustomer(customer);

            return h.response(customer).code(201);
        },
        method: 'POST',
        path: '/customers'
    });
};

const modifyCustomerRoute = (server) => {
    server.route({
        handler: (request) => {
            modifyCustomer(request.payload);

            return '';
        },
        method: 'PUT',
        path: '/customers/{customerId}'
    });
};

const deleteCustomerRoute = (server) => {
    server.route({
        handler: (request) => {
            removeCustomerByCustomerId(request.params.customerId);

            return '';
        },
        method: 'DELETE',
        path: '/customers/{customerId}'
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
    addCustomersRoute(server);
    modifyCustomerRoute(server);
    deleteCustomerRoute(server);
};

module.exports = {
    initCustomerControllers
};
