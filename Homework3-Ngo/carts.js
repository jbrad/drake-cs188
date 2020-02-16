const carts = ({cartID, belongsTo, createdDate, purchaseDate}) => ({
    cartID: cartID,
    belongsTo: belongsTo,
    createdDate: createdDate,
    purchaseDate: purchaseDate
});

exports.cart = carts;