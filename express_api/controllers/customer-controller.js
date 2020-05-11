const {
    getAllCustomers,
    getCustomerByCustomerId,
    addCustomer,
    modifyCustomer,
    removeCustomerByCustomerId
} = require('../services/customer-service');
const {getCartsByCustomerId} = require('../services/cart-service');


const getCustomersCartsRoute = (server) => {
    server.get("/customers/:customerId/carts", (req, res) => {
        const customerId = req.params.customerId;
        if (!customerId) {
            res.status(404);
        }
        res.send(getCartsByCustomerId(customerId))
    }
    );
};

const getCustomersRoute = (server) => {
    server.get("/customers", (req, res) => {
        res.send(getAllCustomers())
    }
    );
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
    server.get("/customers/:customerId", (req, res) => {
        const customer = getCustomerByCustomerId(req.params.customerId);
        if (!customer) {
            res.status(404);
        }
        res.send(customer)
    }
    );
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
