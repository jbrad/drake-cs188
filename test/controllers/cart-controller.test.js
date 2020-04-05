const Hapi = require('@hapi/hapi');
const uuid = require('uuid');
const {when} = require('jest-when');

const {initCartControllers} = require('../../controllers/cart-controller');
const {getAllCarts, 
    getCartByCartId,
    getCartsByCustomerId,
    addCart,
    modifyCart,
    removeCartByCartId} = require('../../services/cart-service');

jest.mock('../../services/cart-service');

describe('cart controller', () => {
    let fakeServer,
        expectedCart,
        expectedCartId,
        expectedCarts,
        expectedCustomerId;

    beforeAll(() => {
        fakeServer = Hapi.server({
            host: 'localhost',
            port: 3000
        });

        expectedCustomerId = uuid.v4();
        expectedCartId = uuid.v4();
        expectedCart = {
            cartId: expectedCartId,
            customerId: expectedCustomerId
        };
        expectedCarts = [expectedCartId, uuid.v4()];

        getAllCarts.mockReturnValue(expectedCarts);

        when(getCartByCartId)
            .calledWith(expectedCartId)
            .mockReturnValue(expectedCart);

        when(getCartsByCustomerId)
            .calledWith(expectedCustomerId)
            .mockReturnValue(expectedCart)

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

    it('should return a cart by customerId', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: `/carts/${expectedCustomerId}/`
        });

        expect(getCartsByCustomerId).toHaveBeenCalledWith(expectedCustomerId);

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCart);
    });

    it('should return NOT_FOUND if a cart does not exist', async () => {
        const randomCustomerId = uuid.v4();

        const response = await fakeServer.inject({
            method: 'GET',
            url: `/carts/${randomCustomerId}/`
        });

        expect(getCartsByCustomerId).toHaveBeenCalledWith(randomCustomerId);
        expect(response.statusCode).toEqual(404);
    });

    it('should be able to create a new cart', async () => {
        expectedCart = {
            cartId: uuid.v4(),
            customerId: uuid.v4()
        }
        const response = await fakeServer.inject({
            method: 'POST',
            payload: expectedCart,
            url: `/carts`
        });

        expect(response.statusCode).toEqual(201);
        expect(response.result).toEqual(expectedCart);

        expect(addCart).toHaveBeenCalledTimes(1);
        expect(addCart).toHaveBeenCalledWith(expectedCart);
        
    });

    it('should be able to update an existing cart', async () => {
        const updatedCart = {
            cartId: expectedCartId,
            customerId: expectedCustomerId
        }
        const response = await fakeServer.inject({
            method: 'PUT',
            payload: updatedCart,
            url: `/carts/${expectedCartId}`
        });

        expect(response.statusCode).toEqual(204);

        expect(modifyCart).toHaveBeenCalledTimes(1);
        expect(modifyCart).toHaveBeenCalledWith(updatedCart);
        
    });

    it('should be able to delete an existing cart', async () => {
        const response = await fakeServer.inject({
            method: 'DELETE',
            url: `/carts/${expectedCartId}`
        });

        expect(response.statusCode).toEqual(204);

        expect(removeCartByCartId).toHaveBeenCalledTimes(1);
        expect(removeCartByCartId).toHaveBeenCalledWith(expectedCartId);
        
    });
});
