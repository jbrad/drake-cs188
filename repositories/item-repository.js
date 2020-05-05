let items = [
    {
        'description': 'Drake Sweatpants',
        'image': 'https://i.pinimg.com/236x/a4/45/eb/a445eb4e5562a94093fb7555be62446a--couch-drake.jpg',
        'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
        'price': 30
    },
    {
        'description': 'Drake Sweatshirt',
        'image': 'https://m.media-amazon.com/images/I/71mb8EpY2lL._SR500,500_.jpg',
        'item_id': '7552a350-f498-4d17-b845-1354fbc010fb',
        'price': 30
    }
];

const selectItems = () => ({
    rows: items
});

const selectItemByItemId = (itemId) =>
    items.find((item) => item['item_id'] === itemId);

const insertItem = (item) => items.push(item);

const updateItem = (updatedItem) => {
    const itemsThatDontMatch = items.filter((item) =>
        item['item_id'] !== updatedItem['item_id']
    );

    items = [
        ...itemsThatDontMatch,
        updatedItem
    ];
};

const deleteItemByItemId = (itemId) => {
    items = items.filter((item) =>
        item['item_id'] !== itemId
    );
};

module.exports = {
    deleteItemByItemId,
    insertItem,
    selectItemByItemId,
    selectItems,
    updateItem
};
