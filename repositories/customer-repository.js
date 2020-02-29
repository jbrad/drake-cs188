const uuid = require('uuid');

let customers = [
    {
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        'first_name': 'Jason',
        'last_name': 'Bradley',
        'email': 'jason.bradley@drake.edu'
    }
];

const selectCustomers = () => ({
    rows: customers,
    error: new Error(),
    driver: 'postgres'
});

const selectCustomerByCustomerId = (customerId) =>
    customers.find((customer) => customer['customer_id'] === customerId);


module.exports = {
    selectCustomers,
    selectCustomerByCustomerId
};
