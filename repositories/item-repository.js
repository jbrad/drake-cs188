let items = [
    {
        'description': 'Drake Sweatpants',
        'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F236x%2F1e%2F8d%2Fdc%2F1e8ddc92da776fb9a0fd80173fecf67c--sweatpants-drake.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fmckinleigh_12%2Fdrake-bulldogs%2F&tbnid=9oF2mgxTeYb0zM&vet=12ahUKEwi996ix-PLoAhXKf6wKHYZuDTEQMygDegUIARDsAQ..i&docid=2zqlurtTBozCXM&w=236&h=236&itg=1&q=drake%20sweatpants%20universit&safe=active&ved=2ahUKEwi996ix-PLoAhXKf6wKHYZuDTEQMygDegUIARDsAQ',
        'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
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
