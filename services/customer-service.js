const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../repositories/customer-repository');

const mapToModel = (customer) => ({
    customerId: customer['customerId'],
    email: customer['email'],
    firstName: customer['firstName'],
    lastName: customer['lastName']
});

const getAllCustomers = () => {
    const {rows} = selectCustomers();

    return rows.map(mapToModel);
};

const getCustomerByCustomerId = (customerId) => {
    const customer = selectCustomerByCustomerId(customerId);

    return mapToModel(customer);
};

module.exports = {
    getAllCustomers,
    getCustomerByCustomerId
};
