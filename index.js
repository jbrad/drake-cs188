const item = {
    itemId: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
    name: 'Ball cap',
    description: 'Drake stuff',
    price: 19.99,
    size: 'Large'
};

const firstName = 'Jason';
const lastName = 'Bradley';

const customer = {
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '+15155555555'
};

console.log('item', item);
console.log('customer', customer);
