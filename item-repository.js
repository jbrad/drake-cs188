const uuid = require("uuid");
let items = [
    {
        item_id: "qwert154-t5yt-4ght-trgt-poiuytrf",
        name: "Drake water bottle",
        description: "A water bottle from Drake store",
        price:59.99
    },
    {
        item_id:uuid.v4(),
        name: "Earphones",
        description: new Date(),
        price: 10.99
    }
];
const selectItems = () => ({
    rows:items,
    error: new Error(),
    driver: "postgres"
});
const selectItemByItemId = ItemId =>
    carts.find(item => cart["item_id"]=== itemId);

module.exports = {
    selectItems,
    selectItemByItemId
};
