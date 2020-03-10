const uuid = require('uuid');

const items = [
    {
        item_id: 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f22',
        name: 'Griff Sweater',
        description: new Date(),
        price: 29.99
    },
    {
        item_id: uuid.v4(),
        name: 'Drake Mug',
        description: new Date(),
        price: 19.99
    }
];

const selectItems = () => ({
    rows: items,
    error: new Error(),
    driver: 'postgres'
});

const selectItemByItemId = (ItemId) =>
    carts.find((item) => cart['item_id'] === itemId);

module.exports = {
    selectItems,
    selectItemByItemId
};
