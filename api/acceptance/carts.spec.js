const frisby = require('frisby');
const uuid = require('uuid');

describe('/carts', () => {
    let cart,
        cartId,
        customerId;

    beforeAll(async () => {
        customerId = uuid.v4();
        cartId = uuid.v4();

        cart = {
            cartId,
            customerId
        };

        await frisby.post('http://localhost:3000/carts', cart);
    });

    afterAll(async () => {
        await frisby.del(`http://localhost:3000/carts/${cartId}`);
    });

    describe('GET /carts', () => {
        test('get all carts', async () => {
            await frisby
                .get('http://localhost:3000/carts')
                .expect('status', 200);
        });
    });

    describe('GET /carts/{cartId}', () => {
        test('get a cart by cartId that exists', async () => {
            await frisby
                .get(`http://localhost:3000/carts/${cartId}`)
                .expect('status', 200);
        });

        test('get a NOT FOUND for a cart by cartId that does not exists', async () => {
            const randomCartId = uuid.v4();

            await frisby
                .get(`http://localhost:3000/cartId/${randomCartId}`)
                .expect('status', 404);
        });
    });

    describe('PUT /cart/{cartId}', () => {
        test('should be able to update a cart by cartId', async () => {
            const updatedCustomerId = uuid.v4();

            const updateCart = {
                ...cart,
                customerId: updatedCustomerId
            };

            await frisby
                .put(`http://localhost:3000/carts/${cartId}`, updateCart)
                .expect('status', 204);

            const response = await frisby
                .get(`http://localhost:3000/carts/${cartId}`)
                .expect('status', 200);

            expect(response.json).toEqual(updateCart);
        });
    });

    describe('DELETE /carts/{cartId}', () => {
        test('should be able to remove a cart by cartId', async () => {
            const anotherCart = {
                cartId: uuid.v4(),
                customerId: uuid.v4()
            };

            await frisby.post('http://localhost:3000/carts', anotherCart);

            await frisby.del(`http://localhost:3000/carts/${anotherCart.cartId}`)
                .expect('status', 204);

            await frisby.get(`http://localhost:3000/carts/${anotherCart.cartId}`)
                .expect('status', 404);
        });
    });

    describe('POST /carts', () => {
        test('should be able to add a cart', async () => {
            const anotherCart = {
                cartId: uuid.v4(),
                customerId: uuid.v4()
            };

            await frisby.post('http://localhost:3000/carts', anotherCart)
                .expect('status', 201)
                .expect('json', anotherCart);

            await frisby.del(`http://localhost:3000/carts/${anotherCart.customerId}`);
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
