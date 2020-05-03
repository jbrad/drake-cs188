let cartItems = [
    {
        'cart_id': '44ef41f4-485b-44d6-8635-7418e026be89',
        'cart_item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f30',
        'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
        'quantity': 2
    }
];

const selectCartItems = () => ({
    rows: cartItems
});

const selectCartItemByCartItemId = (cartItemId) =>
    cartItems.find((cartItem) => cartItem['cart_item_id'] === cartItemId);

const selectCartItemsByCartId = (cartId) => ({
    rows: cartItems.filter((cartItem) => cartItem['cart_id'] === cartId)
});

const insertCartItem = (cartItem) => cartItems.push(cartItem);

const updateCartItem = (updatedItem) => {
    const itemsThatDontMatch = cartItems.filter((cartItem) =>
        cartItem['cart_item_id'] !== updatedItem['cart_item_id']
    );

    cartItems = [
        ...itemsThatDontMatch,
        updatedItem
    ];
};

const deleteCartItemByCartItemId = (cartItemId) => {
    cartItems = cartItems.filter((cartItem) =>
        cartItem['cart_item_id'] !== cartItemId
    );
};

module.exports = {
    deleteCartItemByCartItemId,
    insertCartItem,
    selectCartItemByCartItemId,
    selectCartItems,
    selectCartItemsByCartId,
    updateCartItem
};
