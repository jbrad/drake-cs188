const {
    selectCustomers,
    selectCustomerByCustomerId,
    insertCustomer,
    updateCustomer,
    deleteCustomerByCustomerId
} = require('../repositories/customer-repository');

const mapToModel = (customer) => ({
    customerId: customer['customerId'],
    email: customer['email'],
    firstName: customer['firstName'],
    lastName: customer['lastName']
});

const mapToDTO = (customer) => ({
    'customerId': customer.customerId,
    'email': customer.email,
    'firstName': customer.firstName,
    'lastName': customer.lastName
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

const addCustomer = (customer) => insertCustomer(mapToDTO(customer));
const modifyCustomer = (customer) => updateCustomer(mapToDTO(customer));
const removeCustomerByCustomerId = (customerId) => deleteCustomerByCustomerId(customerId);

module.exports = {
    addCustomer,
    getAllCustomers,
    getCustomerByCustomerId,
    modifyCustomer,
    removeCustomerByCustomerId
};
