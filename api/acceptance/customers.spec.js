const frisby = require('frisby');
const uuid = require('uuid');
const Chance = require('chance');

const chance = new Chance();

describe('/customers', () => {
    let customer,
        customerId,
        firstName,
        lastName,
        email;

    beforeAll(async () => {
        customerId = uuid.v4();
        firstName = chance.first();
        lastName = chance.last();
        email = chance.email();

        customer = {
            customerId,
            email,
            firstName,
            lastName
        };

        await frisby.post('http://localhost:3000/customers', customer);
    });

    afterAll(async () => {
        await frisby.del(`http://localhost:3000/customers/${customerId}`);
    });

    describe('GET /customers', () => {
        test('get all customers', async () => {
            await frisby
                .get('http://localhost:3000/customers')
                .expect('status', 200);
        });
    });

    describe('GET /customers/{customerId}', () => {
        test('get a customer by customerId that exists', async () => {
            await frisby
                .get(`http://localhost:3000/customers/${customerId}`)
                .expect('status', 200);
        });

        test('get a NOT FOUND for a customer by customerId that does not exists', async () => {
            const randomCustomerId = uuid.v4();

            await frisby
                .get(`http://localhost:3000/customers/${randomCustomerId}`)
                .expect('status', 404);
        });
    });

    describe('PUT /customers/{customerId}', () => {
        test('should be able to update a customer by customerId', async () => {
            const updatedLastName = chance.last();

            const updateCustomer = {
                ...customer,
                lastName: updatedLastName
            };

            await frisby
                .put(`http://localhost:3000/customers/${customerId}`, updateCustomer)
                .expect('status', 204);

            const response = await frisby
                .get(`http://localhost:3000/customers/${customerId}`)
                .expect('status', 200);

            expect(response.json).toEqual(updateCustomer);
        });
    });

    describe('DELETE /customers/{customerId}', () => {
        test('should be able to remove a customer by customerId', async () => {
            const anotherCustomer = {
                customerId: uuid.v4(),
                email: chance.email(),
                firstName: chance.first(),
                lastName: chance.last()
            };

            await frisby.post('http://localhost:3000/customers', anotherCustomer);

            await frisby.del(`http://localhost:3000/customers/${anotherCustomer.customerId}`)
                .expect('status', 204);

            await frisby.get(`http://localhost:3000/customers/${anotherCustomer.customerId}`)
                .expect('status', 404);
        });
    });

    describe('POST /customers', () => {
        test('should be able to add a customer', async () => {
            const anotherCustomer = {
                customerId: uuid.v4(),
                email: chance.email(),
                firstName: chance.first(),
                lastName: chance.last()
            };

            await frisby.post('http://localhost:3000/customers', anotherCustomer)
                .expect('status', 201)
                .expect('json', anotherCustomer);

            await frisby.del(`http://localhost:3000/customers/${anotherCustomer.customerId}`);
        });
    });

    describe('GET /customers/{customerId}/carts', () => {
        test('should be able to get a customers carts', async () => {
            const originalCustomerId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';

            await frisby.get(`http://localhost:3000/customers/${originalCustomerId}/carts`)
                .expect('status', 200);
        });
    });
});
