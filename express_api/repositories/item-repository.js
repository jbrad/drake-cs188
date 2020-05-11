let items = [
    {
        'description': 'Drake Sweatpants',
        'image': 'https://i.pinimg.com/236x/1e/8d/dc/1e8ddc92da776fb9a0fd80173fecf67c--sweatpants-drake.jpg',
        'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
        'price': 30
    },
    {
        'description': 'Drake Sweatshirt',
        'image': 'https://www.trendstees.com/wp-content/uploads/2018/07/Drake-University-Hooded-Sweatshirt.jpg',
        'item_id': '0DF475BD-1368-488C-9902-D4D4F710E0EA',
        'price': 30
    },
    {
        'description': 'Drake hat',
        'image': 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3045000/altimages/ff_3045282alt1_full.jpg&w=325',
        'item_id': 'F73C7E33-C766-404A-A759-A52B7282B29C',
        'price': 15
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
