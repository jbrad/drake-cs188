const customers = ({firstname, lastName, email, phoneNumber}) => ({
    firstName: firstName,
    lastName: lastName,
    fullName: `${firstName} ${lastName}`,
    email: email,
    phoneNumber: phoneNumber
});

exports.customer = customers;