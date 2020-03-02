const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {

    const server = Hapi.server({
        "port": 5555,
        "host": 'localhost'
    });

    const bobEmail=uuid.v4();
    const customerBob = {
        customerEmail:bobEmail,
        firstName:'Bob',
        lastName:'Whatever',
        PhoneNumber: '1234543210'
    };

    const customerTim = {
        customerEmail: uuid.v4(),
        firstName:'Tim',
        lastName:'Whenever',
        PhoneNumber: '2468008642'
    };

    const customerFere = {
        customerEmail:uuid.v4(),
        firstName:'Fere',
        lastName:'Wherever',
        PhoneNumber:'1357913579'
    };

    let customers = [customerBob, customerTim, customerFere];

    server.route({
        method: 'GET',
        path: '/customers',
        handler: (request, h) => {
            return customers;
        }
    });

    server.route({
        method: 'GET',
        path: '/customers/{customerEmail}',
        handler: (request, h) => {
            const {customerEmail} = request.params;
            const customer = customers.find((cust) => cust.customerEmail === customerEmail);

            if (!customer) {
                return h.response().code(404);
            }

            return customer;
        }
    });

    server.route({
        method: 'POST',
        path: '/customers',
        handler: (request, h) => {
            const customer = request.payload;
            const existingcust = customers.find((cust) => cust.customerEmail === customer.customerEmail);

            if (existingcust) {
                return h.response(existingcust).code(303);
            } else {
                customers.push(customer);

                return h.response(customer).code(201);
            }

        }
    });

    server.route({
        method: 'DELETE',
        path: '/customers/{customerEmail}',
        handler: (request, h) => {
            const {customerEmail} = request.params;
            const customer = customers.find((cust) => cust.customerEmail === customerEmail);

            if (!customer) {
                return h.response().code(404);
            }

            let newCustomers = [];

            customers.forEach((cust) => {
                if (cust.customerEmail !== customerEmail) {
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }
    });

    server.route({
        method: 'PUT',
        path: '/customers/{customerEmail}',
        handler: (request, h) => {
            const {customerEmail} = request.params;
            const updatedCustomer = request.payload;

            if (customerEmail === bobEmail && updatedCustomer.PhoneNumber !== '1234543210') {
                return h.response().code(422);
            }

            if (customerEmail !== updatedCustomer.customerEmail) {
                return h.response().code(409);
            }

            let newCustomers = [];

            customers.forEach((cust) => {
                if (cust.customerEmail === customerEmail) {
                    newCustomers.push(updatedCustomer);
                } else {
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

