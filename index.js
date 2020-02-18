const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const samId = uuid.v4();
    const crocodileSam = {
        crocodileId: samId,
        name: 'Sam',
        age: 20
    };

    const crocodileSamantha = {
        crocodileId: uuid.v4(),
        name: 'Samantha',
        age: 21
    };

    const crocodileDundie = {
        crocodileId: uuid.v4(),
        name: 'Dundie',
        age: 55
    };

    let crocodiles = [crocodileSam, crocodileSamantha, crocodileDundie];

    server.route({
        method: 'GET',
        path: '/crocodiles',
        handler: (request, h) => {
            return crocodiles;
        }
    });

    server.route({
        method: 'GET',
        path: '/crocodiles/{crocodileId}',
        handler: (request, h) => {
            const {crocodileId} = request.params;
            const crocodile = crocodiles.find((croc) => croc.crocodileId === crocodileId);

            if (!crocodile) {
                return h.response().code(404);
            }

            return crocodile;
        }
    });

    server.route({
        method: 'POST',
        path: '/crocodiles',
        handler: (request, h) => {
            const crocodile = request.payload;
            const existingCroc = crocodiles.find((croc) => croc.crocodileId === crocodile.crocodileId);

            if (existingCroc) {
                return h.response(existingCroc).code(303);
            } else {
                crocodiles.push(crocodile);

                return h.response(crocodile).code(201);
            }

        }
    });

    server.route({
        method: 'DELETE',
        path: '/crocodiles/{crocodileId}',
        handler: (request, h) => {
            const {crocodileId} = request.params;
            const crocodile = crocodiles.find((croc) => croc.crocodileId === crocodileId);

            if (!crocodile) {
                return h.response().code(404);
            }

            let newCrocodiles = [];

            crocodiles.forEach((croc) => {
                if (croc.crocodileId !== crocodileId) {
                    newCrocodiles.push(croc);
                }
            });

            crocodiles = newCrocodiles;

            return '';
        }
    });

    server.route({
        method: 'PUT',
        path: '/crocodiles/{crocodileId}',
        handler: (request, h) => {
            const {crocodileId} = request.params;
            const updatedCrocodile = request.payload;

            if (crocodileId === samId && updatedCrocodile.age !== 20) {
                return h.response().code(422);
            }

            if (crocodileId !== updatedCrocodile.crocodileId) {
                return h.response().code(409);
            }

            let newCrocodiles = [];

            crocodiles.forEach((croc) => {
                if (croc.crocodileId === crocodileId) {
                    newCrocodiles.push(updatedCrocodile);
                } else {
                    newCrocodiles.push(croc);
                }
            });

            crocodiles = newCrocodiles;

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
