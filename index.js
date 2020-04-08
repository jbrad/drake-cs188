const Hapi = require('@hapi/hapi');

const {initCustomerControllers} = require('./controllers/customer-controller');
const {initCartControllers} = require('./controllers/cart-controller');
const {initItemControllers} = require('./controllers/item-controller');
const {initCartItemControllers} = require('./controllers/cart-item-controller');

const init = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 3000
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
