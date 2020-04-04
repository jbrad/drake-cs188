const Hapi = require('@hapi/hapi');
const uuid = require('uuid');
const {when} = require('jest-when');

const {initCustomerControllers} = require('../../controllers/customer-controller');
const {
    getAllCustomers,
    getCustomerByCustomerId,
    addCustomer,
    modifyCustomer,
    removeCustomerByCustomerId
} = require('../../services/customer-service');
const {getCartsByCustomerId} = require('../../services/cart-service');

jest.mock('../../services/customer-service');
jest.mock('../../services/cart-service');

describe('customer controller', () => {
    let fakeServer,
        expectedCustomer,
        expectedCustomerId,
        expectedCustomers,
        expectedCarts;

    beforeAll(() => {
        fakeServer = Hapi.server({
            host: 'localhost',
            port: 3000
        });

        expectedCustomerId = uuid.v4();
        expectedCustomer = {
            customerId: expectedCustomerId
        };
        expectedCustomers = [expectedCustomerId, uuid.v4()];
        expectedCarts = [uuid.v4()];

        getAllCustomers.mockReturnValue(expectedCustomers);

        when(getCustomerByCustomerId)
            .calledWith(expectedCustomerId)
            .mockReturnValue(expectedCustomer);

        when(getCartsByCustomerId)
            .calledWith(expectedCustomerId)
            .mockReturnValue(expectedCarts);

        initCustomerControllers(fakeServer);
    });

    it('should return all customers', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: '/customers'
        });

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCustomers);
    });

    it('should return a customer by customerId', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: `/customers/${expectedCustomerId}`
        });

        expect(getCustomerByCustomerId).toHaveBeenCalledWith(expectedCustomerId);

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCustomer);
    });

    it('should return NOT_FOUND if a customer does not exist', async () => {
        const randomCustomerId = uuid.v4();

        const response = await fakeServer.inject({
            method: 'GET',
            url: `/customers/${randomCustomerId}`
        });

        expect(getCustomerByCustomerId).toHaveBeenCalledWith(randomCustomerId);
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

    it('should be able to create a new customer', async () => {
        expectedCustomer = {
            customerId: uuid.v4(),
            email: 'andybernard@dundermifflin.com',
            firstName: 'Andy',
            lastName: 'Bernard'
        };

        const response = await fakeServer.inject({
            method: 'POST',
            payload: expectedCustomer,
            url: '/customers'
        });

        expect(response.statusCode).toEqual(201);
        expect(response.result).toEqual(expectedCustomer);

        expect(addCustomer).toHaveBeenCalledTimes(1);
        expect(addCustomer).toHaveBeenCalledWith(expectedCustomer);
    });

    it('should be able to update an existing customer', async () => {
        const updatedCustomer = {
            customerId: expectedCustomerId,
            email: 'andybernard@dundermifflin.com',
            firstName: 'Andy',
            lastName: 'Bernard'
        };

        const response = await fakeServer.inject({
            method: 'PUT',
            payload: updatedCustomer,
            url: `/customers/${expectedCustomerId}`
        });

        expect(response.statusCode).toEqual(204);

        expect(modifyCustomer).toHaveBeenCalledTimes(1);
        expect(modifyCustomer).toHaveBeenCalledWith(updatedCustomer);
    });

    it('should be able to delete an existing customer', async () => {
        const response = await fakeServer.inject({
            method: 'DELETE',
            url: `/customers/${expectedCustomerId}`
        });

        expect(response.statusCode).toEqual(204);

        expect(removeCustomerByCustomerId).toHaveBeenCalledTimes(1);
        expect(removeCustomerByCustomerId).toHaveBeenCalledWith(expectedCustomerId);
    });
});
