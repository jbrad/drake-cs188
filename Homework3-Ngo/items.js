const items = ({itemID, name, description, price, sizesAvailable}) => ({
    itemID: itemID,
    name: name,
    description: description,
    price: price,
    sizesAvailable: sizesAvailable
});

exports.item = items;