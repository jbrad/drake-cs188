const {
    deleteItemByItemId,
    insertItem,
    selectItemByItemId,
    selectItems,
    updateItem
} = require('../repositories/item-repository');

const mapToModel = (item) => ({
    description: item['description'],
    itemId: item['item_id'],
    price: item['price']
});

const mapToDTO = (item) => ({
    'description': item.description,
    'item_id': item.itemId,
    'price': item.price
});

const getAllItems = () => {
    const {rows} = selectItems();

    return rows.map(mapToModel);
};

const getItemByItemId = (itemId) => {
    const item = selectItemByItemId(itemId);

    if (!item) {
        return null;
    }

    return mapToModel(item);
};

const addItem = (item) => insertItem(mapToDTO(item));
const modifyItem = (item) => updateItem(mapToDTO(item));
const removeItemByItemId = (itemId) => deleteItemByItemId(itemId);

module.exports = {
    addItem,
    getAllItems,
    getItemByItemId,
    modifyItem,
    removeItemByItemId
};
