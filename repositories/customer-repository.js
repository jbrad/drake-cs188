const customers = [
    {
        customerId: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        email: 'jason.bradley@drake.edu',
        firstName: 'Jason',
        lastName: 'Bradley'
    },
    {
        customerId: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f30',
        email: 'vy.ngo@drake.edu',
        firstName: 'Vy',
        lastName: 'Ngo'
    }
];

const selectCustomers = () => ({
    driver: 'postgres',
    error: new Error(),
    rows: customers
});

const selectCustomerByCustomerId = (customerId) =>
    customers.find((customer) => customer['customerId'] === customerId);

module.exports = {
    selectCustomerByCustomerId,
    selectCustomers
};
