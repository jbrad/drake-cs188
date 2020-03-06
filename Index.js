const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {
    const {initCustomerControllers} = require('./controllers/customer-controller');
    const {initCartControllers} = require('./controllers/cart-controller');
    const {initCartItemControllers} = require('./controllers/cart-item-controller');
    const {initItemControllers} = require('./controllers/item-controller');

    const init = async () => {
        const server = Hapi.server({
            port: 5555,
            host: 'localhost'
        });

        const BobId = uuid.v4();
        const customerBob = {
            customerId: BobId,
            firstName: 'Bob',
            lastName: 'Whatever',
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
            phoneNumber: '1234543210'
        };

        const customerTim = {
            customerId: uuid.v4(),
            firstName: 'Tim',
            lastName: 'Whenever',
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
            phoneNumber: '2468008642'
        };

        const customerFere = {
            customerId: uuid.v4(),
            firstName: 'Fere',
            lastName: 'Wherever',
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
            phoneNumber: '1357913579'
        };

        const Pinata = {
            itemId: uuid.v4(),
            name: 'Pinata',
            description: "It's a thing you can hit",
            price: 19.99,
        };

        const itemHoodie = {
            itemId: uuid.v4(),
            name: 'Hoodie',
            description: "Blue Hoodie from Drake. GO BULLDOGS!!!!!!!!!",
            price: 39.99,
        };

        const itemPen = {
            itemId: uuid.v4(),
            name: 'Pen',
            description: "It is a pen... what else is there to say?",
            price: 2.99,
        };

        const cartBob = {
            customerId: customerBob.customerId,
            creationDate: '1/2/2020',
            purchaseDate: '2/9/2020',
            items: [[itemPen, 1], [itemHoodie, 2]]
        };

        let customers = [customerBob, customerTim, customerFere];

        let items = [itemPen, itemHoodie, Pinata];

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
                const customer = customers.find((cust) => cust.customerId === customerId);

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
                const existingCust = customers.find((cust) => cust.customerId === customer.customerId);

                if (existingCust) {
                    return h.response(existingCust).code(303);
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
                const customer = customers.find((cust) => cust.customerId === customerId);

                if (!customer) {
                    return h.response().code(404);
                }

                let newcustomers = [];

                customers.forEach((cust) => {
                    if (cust.customerId !== customerId) {
                        newcustomers.push(cust);
                    }
                });

                customers = newcustomers;

                return '';
            }
        });

        server.route({
            method: 'PUT',
            path: '/customers/{customerId}',
            handler: (request, h) => {
                const {customerId} = request.params;
                const updatedcustomer = request.payload;

                if (customerId === samId && updatedcustomer.age !== 20) {
                    return h.response().code(422);
                }

                if (customerId !== updatedcustomer.customerId) {
                    return h.response().code(409);
                }

                let newcustomers = [];

                customers.forEach((cust) => {
                    if (cust.customerId === customerId) {
                        newcustomers.push(updatedcustomer);
                    } else {
                        newcustomers.push(cust);
                    }
                });

                customers = newcustomers;

                return '';
            }
        });

        server.route({
            method: 'GET',
            path: '/items',
            handler: (request, h) => {
                return items;
            }
        });

        server.route({
            method: 'GET',
            path: '/item/{itemId}',
            handler: (request, h) => {
                const {itemId} = request.params;
                const item = items.find((it) => it.itemId === itemId);

                if (!item) {
                    return h.response().code(404);
                }

                return item;
            }
        });

        server.route({
            method: 'POST',
            path: '/customers',
            handler: (request, h) => {
                const item = request.payload;
                const existingIt = customers.find((it) => it.itemId === item.itemId);

                if (existingIt) {
                    return h.response(existingIt).code(303);
                } else {
                    items.push(item);

                    return h.response(item).code(201);
                }

            }
        });

        server.route({
            method: 'DELETE',
            path: '/items/{itemId}',
            handler: (request, h) => {
                const {itemId} = request.params;
                const item = items.find((cust) => it.itemId === itemId);

                if (!item) {
                    return h.response().code(404);
                }

                let newitems = [];

                items.forEach((it) => {
                    if (it.itemId !== itemId) {
                        newitems.push(it);
                    }
                });

                items = newitems;

                return '';
            }
        });

        server.route({
            method: 'PUT',
            path: '/items/{itemId}',
            handler: (request, h) => {
                const {itemId} = request.params;
                const updateditem = request.payload;

                if (itemId !== updateditem.itemId) {
                    return h.response().code(409);
                }

                let newitems = [];

                items.forEach((it) => {
                    if (it.itemId === itemId) {
                        newitems.push(updateditem);
                    } else {
                        newitems.push(it);
                    }
                });

                items = newitems;

                return '';
            }
        });

        server.route({
            method: 'GET',
            path: '/cart/{customerId}',
            handler: (request, h) => {
                const {customerId} = request.params;
                const cart = cart.find((cust) => cust.customerId === customerId);

                if (!cart) {
                    return h.response().code(404);
                }

                return cart;
            }
        });
        initCustomerControllers(server);
        initCartControllers(server);
        initItemControllers(server);
        initCartItemControllers(server);

        await server.start();
        console.log('Server running on %s', server.info.uri);
    };

    process.on('unhandledRejection', (err) => {

        console.log(err);
        process.exit(1);
    });

    init();
}