const uuid = require('uuid');

const {
    addCustomer,
    getAllCustomers,
    getCustomerByCustomerId,
    modifyCustomer,
    removeCustomerByCustomerId
} = require('../../services/customer-service');
const {
    insertCustomer,
    selectCustomers,
    selectCustomerByCustomerId,
    updateCustomer,
    deleteCustomerByCustomerId
} = require('../../repositories/customer-repository');

jest.mock('../../repositories/customer-repository');

describe('customer service', () => {
    let expectedCustomer,
        expectedCustomerId,
        expectedCustomerFromDatabase;

    beforeEach(() => {
        expectedCustomerId = uuid.v4();

        expectedCustomer = {
            customerId: expectedCustomerId,
            email: 'jhalpert@dundermifflin.com',
            firstName: 'Jim',
            lastName: 'Halpert'
        };

        expectedCustomerFromDatabase = {
            'customer_id': expectedCustomerId,
            'email': expectedCustomer.email,
            'first_name': expectedCustomer.firstName,
            'last_name': expectedCustomer.lastName
        };

        insertCustomer.mockReturnValue(expectedCustomer);
        selectCustomers.mockReturnValue({
            rows: [expectedCustomerFromDatabase]
        });
        selectCustomerByCustomerId.mockReturnValue(expectedCustomerFromDatabase);
        updateCustomer.mockReturnValue(expectedCustomerFromDatabase);
        deleteCustomerByCustomerId.mockReturnValue(expectedCustomerFromDatabase);
    });

    it('should insert a new customer', () => {
        const actualNewCustomer = addCustomer(expectedCustomer);

        expect(insertCustomer).toHaveBeenCalledTimes(1);
        expect(insertCustomer).toHaveBeenCalledWith(expectedCustomerFromDatabase);

        expect(actualNewCustomer).toEqual(expectedCustomer);
    });

    it('should be able to get all customers', () => {
        const expectedCustomers = getAllCustomers();

        expect(selectCustomers).toHaveBeenCalledTimes(1);

        expect(expectedCustomers).toEqual([expectedCustomer]);
    });

    it('should be able to get a customer by customerId', () => {
        const actualCustomer = getCustomerByCustomerId(expectedCustomerId);

        expect(selectCustomerByCustomerId).toHaveBeenCalledTimes(1);
        expect(selectCustomerByCustomerId).toHaveBeenCalledWith(expectedCustomerId);

        expect(actualCustomer).toEqual(expectedCustomer);
    });

    it('should return null if there is no customer by customerId', () => {
        selectCustomerByCustomerId.mockReturnValue(null);

        const actualCustomer = getCustomerByCustomerId(expectedCustomerId);

        expect(actualCustomer).toBeNull();
    });

    it('should be able to update a customer by customerId', () => {
        const actualCustomer = modifyCustomer(expectedCustomer);

        expect(updateCustomer).toHaveBeenCalledTimes(1);
        expect(updateCustomer).toHaveBeenCalledWith(expectedCustomerFromDatabase);

        expect(actualCustomer).toEqual(expectedCustomerFromDatabase);
    });

    it('should be able to delete a customer by customerId', () => {
        const actualCustomer = removeCustomerByCustomerId(expectedCustomerId);

        expect(deleteCustomerByCustomerId).toHaveBeenCalledTimes(1);
        expect(deleteCustomerByCustomerId).toHaveBeenCalledWith(expectedCustomerId);

        expect(actualCustomer).toEqual(expectedCustomerFromDatabase);
    });
});
