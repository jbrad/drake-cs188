const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

describe('customer repository', () => {
    let firstCustomerId,
        secondCustomerId,
        expectedFirstCustomer,
        expectedSecondCustomer,
        expectedFirstCustomerFirstName,
        expectedSecondCustomerFirstName,
        expectedFirstCustomerLastName,
        expectedSecondCustomerLastName,
        expectedFirstEmail,
        expectedSecondEmail;

    beforeEach(() => {
        firstCustomerId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';
        secondCustomerId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f30';
        expectedFirstCustomerFirstName = 'Jason';
        expectedSecondCustomerFirstName = 'Vy';
        expectedFirstCustomerLastName = 'Bradley';
        expectedSecondCustomerLastName = 'Ngo';
        expectedFirstEmail = 'jason.bradley@drake.edu';
        expectedSecondEmail = 'vy.ngo@drake.edu';

        expectedFirstCustomer = {
            customerId: firstCustomerId,
            email: expectedFirstEmail,
            firstName: expectedFirstCustomerFirstName,
            lastName: expectedFirstCustomerLastName
        };
        expectedSecondCustomer = {
            customerId: secondCustomerId,
            email: expectedSecondEmail,
            firstName: expectedSecondCustomerFirstName,
            lastName: expectedSecondCustomerLastName
        };
    });

    describe('selectCustomers', () => {
        it('should return all the customers', () => {
            const actualCustomers = selectCustomers();
            const [actualFirstCustomer, actualSecondCustomer] = actualCustomers.rows;

            expect(actualFirstCustomer).toEqual(expectedFirstCustomer);
            expect(actualSecondCustomer).toEqual(expectedSecondCustomer);
        });
    });

    describe('selectCustomersByCustomerId', () => {
        it('should return a specific customer by customerId', () => {
            const actualFirstCustomer = selectCustomerByCustomerId(firstCustomerId);

            expect(actualFirstCustomer).toEqual({
                customerId: firstCustomerId,
                email: expectedFirstEmail,
                firstName: expectedFirstCustomerFirstName,
                lastName: expectedFirstCustomerLastName
            });

            const actualSecondCustomer = selectCustomerByCustomerId(secondCustomerId);

            expect(actualSecondCustomer).toEqual({
                customerId: secondCustomerId,
                email: expectedSecondEmail,
                firstName: expectedSecondCustomerFirstName,
                lastName: expectedSecondCustomerLastName
            });
        });
    });
});
