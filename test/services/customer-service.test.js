const uuid = require('uuid');

const {
    getAllCustomers,
    getCustomerByCustomerId
} = require('../../services/customer-service');
const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

jest.mock('../../repositories/customer-repository');

describe('getAllCustomers', () => {
    let expectedCustomer,
        expectedCustomerId,
        expectedCustomerFirstName,
        expectedCustomerLastName,
        expectedCustomerEmail;

    beforeEach(() => {
        expectedCustomerId = uuid.v4();
        expectedCustomerFirstName = 'Vy';
        expectedCustomerLastName = 'Ngo';
        expectedCustomerEmail = 'vy.ngo@drake.edu';

        expectedCustomer = {
            customerId: expectedCustomerId,
            email: expectedCustomerEmail,
            firstName: expectedCustomerFirstName,
            lastName: expectedCustomerLastName
        };

        selectCustomers.mockReturnValue({
            rows: [{
                customerId: expectedCustomerId,
                email: expectedCustomerEmail,
                firstName: expectedCustomerFirstName,
                lastName: expectedCustomerLastName
            }]
        });

        selectCustomerByCustomerId.mockReturnValue({
            customerId: expectedCustomerId,
            email: expectedCustomerEmail,
            firstName: expectedCustomerFirstName,
            lastName: expectedCustomerLastName
        });
    });

    it('should get all the customers', () => {
        const actualCustomers = getAllCustomers();

        expect(selectCustomers).toHaveBeenCalledTimes(1);

        expect(actualCustomers).toEqual([
            expectedCustomer
        ]);
    });

    it('should get a customer by a specific customerId', () => {
        const actualCustomer = getCustomerByCustomerId(expectedCustomerId);

        expect(selectCustomerByCustomerId).toHaveBeenCalledTimes(1);
        expect(selectCustomerByCustomerId).toHaveBeenCalledWith(expectedCustomerId);

        expect(actualCustomer).toEqual(expectedCustomer);
    });
});
