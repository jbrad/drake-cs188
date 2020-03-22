const uuid = require('uuid');

const items = [
    {
        description: new Date(),
        itemId: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f22',
        name: 'Griff Sweater',
        price: 29.99
    },
    {
        description: new Date(),
        itemId: uuid.v4(),
        name: 'Drake Mug',
        price: 19.99
    }
];

const selectItems = () => ({
    driver: 'postgres',
    error: new Error(),
    rows: items
});

const selectItemByItemId = (itemId) =>
    items.find((item) => item[itemId] === itemId);

module.exports = {
    selectItemByItemId,
    selectItems
};
