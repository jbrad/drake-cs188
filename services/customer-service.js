const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../repositories/customer-repository');

const mapToModel = (customer) => ({
    customerId: customer['customer_id'],
    email: customer['email'],
    firstName: customer['first_name'],
    lastName: customer['last_name']
});

const getAllCustomers = () => {
    const {rows} = selectCustomers();

    return rows.map(mapToModel);
};

const getCustomerByCustomerId = (customerId) => {
    const customer = selectCustomerByCustomerId(customerId);

    if (!customer) {
        return null;
    }

    return mapToModel(customer);
};

module.exports = {
    getAllCustomers,
    getCustomerByCustomerId
};
