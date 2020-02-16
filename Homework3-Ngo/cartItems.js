const cartItem = ({cartID, whatItem, quantity}) => ({
    cartID: cartID,
    whatItem: whatItem,
    quantity: quantity
});

exports.cartItems = cartItem;