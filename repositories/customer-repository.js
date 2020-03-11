const customers = [
    {
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        'email': 'jason.bradley@drake.edu',
        'first_name': 'Jason',
        'last_name': 'Bradley'
    }
];

const selectCustomers = () => ({
    rows: customers
});

const selectCustomerByCustomerId = (customerId) =>
    customers.find((customer) => customer['customer_id'] === customerId);

module.exports = {
    selectCustomerByCustomerId,
    selectCustomers
};
