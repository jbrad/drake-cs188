const uuid = require('uuid');

const {
    deleteCustomerByCustomerId,
    insertCustomer,
    selectCustomerByCustomerId,
    selectCustomers,
    updateCustomer
} = require('../../repositories/customer-repository');

describe('customer repository', () => {
    let expectedCustomerId,
        expectedCustomer;

    beforeEach(() => {
        expectedCustomerId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';

        expectedCustomer = {
            'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
            'email': 'jason.bradley@drake.edu',
            'first_name': 'Jason',
            'last_name': 'Bradley'
        };
    });

    describe('selectCustomers', () => {
        it('should return all the customers', () => {
            const actualCustomers = selectCustomers();

            expect(actualCustomers).toEqual({
                rows: [expectedCustomer]
            });
        });
    });

    describe('selectCustomerByCustomerId', () => {
        it('should return all the customers', () => {
            const actualCustomer = selectCustomerByCustomerId(expectedCustomerId);

            expect(actualCustomer).toEqual(expectedCustomer);
        });
    });

    describe('deleteCustomerByCustomerId', () => {
        it('should return all the customers', () => {
            deleteCustomerByCustomerId(expectedCustomerId);

            const actualCustomers = selectCustomers();

            expect(actualCustomers).toEqual({
                rows: []
            });
        });
    });

    describe('insertCustomer', () => {
        it('should insert a new customers', () => {
            const newCustomer = {
                'customer_id': uuid.v4(),
                'email': 'jhalpert@dundermifflin.com',
                'first_name': 'Jim',
                'last_name': 'Halpert'
            };

            insertCustomer(newCustomer);

            const actualCustomers = selectCustomers();

            expect(actualCustomers).toEqual({
                rows: [newCustomer]
            });
        });
    });

    describe('updateCustomer', () => {
        it('should insert a new customers', () => {
            const updatedCustomer = {
                'customer_id': expectedCustomerId,
                'email': 'jason.bradley@drake.edu',
                'first_name': 'JBrad',
                'last_name': 'ley'
            };

            updateCustomer(updatedCustomer);

            const actualCustomer = selectCustomerByCustomerId(expectedCustomerId);

            expect(actualCustomer).toEqual(updatedCustomer);
        });
    });
});
