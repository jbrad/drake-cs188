const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

  const customerJulian = {
        customerId: uuid.v4(),
        Firstname: 'Julian',
        LastName: 'Castro',
        PhoneNumber: 6418912220,
        Email: "jcastro@hud.gov"
        age: 45
    };

    const customerAndrew = {
        customerId: uuid.v4(),
        Firstname: 'Andrew',
        LastName: 'Yang',
        PhoneNumber: 6412202020,
        Email: "noreply@ventureForAmerica.com"
        age: 45
    };

    const customerKamala = {
        customerId: uuid.v4(),
        Firstname: 'Kamala',
        LastName: 'Harris',
        PhoneNumber: 5159877234,
        Email: "KHarris@doj.ca"
        age: 55
    };

    let customers = [customerJulian, customerAndrew, customerKamala];

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
            const customer = customers.find((costumer) => costumer.customerId === customerId);

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
            const existingcostumer = customers.find((costumer) => costumer.customerId === customer.customerId);

            if (existingcostumer) {
                return h.response(existingcostumer).code(303);
            } else {
                customers.push(customer);

                return h.response(customer).code(201);
            }

        }
    });

                const customer = customers.find((costumer) => costumer.customerId === customerId);
            const {customerId} = request.params;
        handler: (request, h) => {
        path: '/customers/{customerId}',
        method: 'DELETE',
server.route({
    console.log('Server running on %s', server.info.uri);
    await server.start();

    });
        }
            return '';

            customers = newcustomers;

            });
                }
                    newcustomers.push(costumer);
                } else {
                    newcustomers.push(updatedcustomer);
                if (costumer.customerId === customerId) {
            customers.forEach((costumer) => {

            let newcustomers = [];

            }
                return h.response().code(409);
            if (customerId !== updatedcustomer.customerId) {

            }

            const updatedcustomer = request.payload;
            const {customerId} = request.params;
        handler: (request, h) => {
        path: '/customers/{customerId}',
        method: 'PUT',
    server.route({

    });
        }
            return '';

            customers = newcustomers;

            });
                }
                    newcustomers.push(costumer);
                if (costumer.customerId !== customerId) {
            customers.forEach((costumer) => {

            let newcustomers = [];

            }
                return h.response().code(404);
           if (!customer) {
};
init();

});
    process.exit(1);
    console.log(err);

process.on('unhandledRejection', (err) => {

