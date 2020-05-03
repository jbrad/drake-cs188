import fetch from 'isomorphic-unfetch';

export const getCustomersCart = async () => {
const customerResponse = await fetch(`http://localhost:5555/customers`);
const [customer] = await customerResponse.json();
const cartResponse = await fetch(`http://localhost:5555/customers/${customer.customerId}/carts`);
const [cart] = await cartResponse.json();
const cartItemResponse = await fetch(`http://localhost:5555/carts/${cart.cartId}/cart-items`);
const cartItems = await cartItemResponse.json();
const itemsToFetch = cartItems.map((cartItem) => fetch(`http://localhost:5555/items/${cartItem.itemId}`));
const itemResponses = await Promise.all(itemsToFetch);
const items = await Promise.all(itemResponses.map((itemResponse) => itemResponse.json()));

return {
    customer,
    cartItems,
    items
};
};