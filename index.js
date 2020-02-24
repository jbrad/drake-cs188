'use strict';

 
const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const samId = uuid.v4();
    const customerSam = {
        customerId: samId,
        firstName: 'Sam',
        lastname: 'Iam',
        email: 'sam.iam@drake.edu',
        phoneNumber: '555-555-5555'
    };

    const customerSamantha = {
        customerId: uuid.v4(),
        firstName: 'Samantha',
        lastname: 'something',
        email: 'samantha.something@drake.edu',
        phoneNumber: '555-123-5555'
    };

    const customerDundie = {
        customerId: uuid.v4(),
        firstName: 'Dundie',
        lastname: 'Miff',
        email: 'dundie.miff@drake.edu',
        phoneNumber: '555-321-5555'
    };

    let customers = [customerSam, customerSamantha, customerDundie];

    server.route({
        method: 'GET',
        path: '/customers',
        handler: (request, h) => {
            return customers;
        }
    });

    server.route({
        method: 'GET',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((person) => person.customerId === customerId);

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
            const existingCustomer = customers.find((person) => person.customerId === customer.customerId);

            if (existingCustomer) {
                return h.response(existingCustomer).code(303);
            } else {
                customers.push(customer);

                return h.response(customer).code(201);
            }

        }
    });

    server.route({
        method: 'DELETE',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((person) => person.customerId === customerId);

            if (!customer) {
                return h.response().code(404);
            }

            let newCustomers = [];

            customers.forEach((person) => {
                if (person.customerId !== customerId) {
                    newCustomers.push(person);
                }
            });

            customers = newCustomers;

            return '';
        }
    });

    server.route({
        method: 'PUT',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const updatedCustomer = request.payload;

            if (customerId === samId && updatedCustomer.number !== '555-555-5555') {
                return h.response().code(422);
            }

            if (customerId !== updatedCustomer.customerId) {
                return h.response().code(409);
            }

            let newCustomers = [];

            customers.forEach((person) => {
                if (person.customerId === customerId) {
                    newCustomers.push(updatedCustomer);
                } else {
                    newCustomers.push(person);
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