const Hapi = require('@hapi/hapi');
const uuid = require('uuid');
const {when} = require('jest-when');

const {initCartControllers} = require('../../controllers/cart-controller');
const {getAllCarts, getCartByCartId} = require('../../services/cart-service');

jest.mock('../../services/cart-service');

describe('cart controller', () => {
    let fakeServer,
        expectedCart,
        expectedCartId,
        expectedCustomerId,
        expectedCarts;

    beforeAll(() => {
        fakeServer = Hapi.server({
            host: 'localhost',
            port: 3000
        });

        expectedCartId = uuid.v4();
        expectedCustomerId = uuid.v4();
        expectedCart = {
            cartId: expectedCartId
        };
        expectedCarts = [expectedCartId, uuid.v4()];

        getAllCarts.mockReturnValue(expectedCarts);

        when(getCartByCartId)
            .calledWith(expectedCartId)
            .mockReturnValue(expectedCart);

        initCartControllers(fakeServer);
    });

    it('should return all carts', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: '/carts'
        });

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCarts);
    });

    it('should return a cart by cartId', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: `/carts/${expectedCartId}`
        });

        expect(getCartByCartId).toHaveBeenCalledWith(expectedCartId);

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCart);
    });

    it('should return NOT_FOUND if a cart does not exist', async () => {
        const randomCartId = uuid.v4();

        const response = await fakeServer.inject({
            method: 'GET',
            url: `/carts/${randomCartId}`
        });

        expect(getCartByCartId).toHaveBeenCalledWith(randomCartId);
        expect(response.statusCode).toEqual(404);
    });

    it('should return all the carts for a customer', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: `/customers/${expectedCustomerId}/carts`
        });

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCarts);
    });

    it('should return NOT_FOUND if a customer does not exist when looking for their carts', async () => {
        const randomCustomerId = uuid.v4();

        const response = await fakeServer.inject({
            method: 'GET',
            url: `/customers/${randomCustomerId}/carts`
        });

        expect(response.statusCode).toEqual(404);
    });
});
