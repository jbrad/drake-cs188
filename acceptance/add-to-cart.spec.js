const frisby = require('frisby');
const uuid = require('uuid');
const Chance = require('chance');

const chance = new Chance();

describe('/add-to-cart', () => {
    let item,
        itemId,
        description,
        price,
        cartItem,
        cartItemId,
        cartId,
        quantity,
        cart,
        customer,
        customerId,
        firstName,
        lastName,
        email;

    beforeAll(async () => {
        itemId = uuid.v4();
        description = chance.sentence();
        price = chance.dollar();
        cartItemId = uuid.v4();
        quantity = chance.d6();
        cartId = uuid.v4();
        customerId = uuid.v4();
        firstName = chance.first();
        lastName = chance.last();
        email = chance.email();

        customer = {
            customerId,
            email,
            firstName,
            lastName
        };

        cart = {
            cartId,
            customerId
        };

        item = {
            description,
            itemId,
            price
        };

        cartItem = {
            cartId,
            cartItemId,
            itemId,
            quantity
        };

        await frisby.post('http://localhost:3000/customers', customer);
        await frisby.post('http://localhost:3000/items', item);
        await frisby.post('http://localhost:3000/carts', cart);
        await frisby.post(`http://localhost:3000/carts/${cartId}/cart-items`, cartItem);
    });

    afterAll(async () => {
        await frisby.del(`http://localhost:3000/carts/${cartId}/cart-items/${cartItemId}`);
        await frisby.del(`http://localhost:3000/carts/${cartId}`);
        await frisby.del(`http://localhost:3000/items/${itemId}`);
        await frisby.del(`http://localhost:3000/customers/${customerId}`);
    });

    test('get all the customers cart information to display', async () => {
        const expectedCartInformation = {
            customer: {
                firstName,
                itemsInTheCart: [
                    {
                        description,
                        price,
                        quantity
                    }
                ],
                lastName
            }
        };

        const actualCustomer = await frisby.get(`http://localhost:3000/customers/${customerId}`);
        const customersCarts = await frisby.get(`http://localhost:3000/customers/${customerId}/carts`);
        const currentCart = customersCarts[0];
        const cartItems = await frisby.get(`http://localhost:3000/carts/${currentCart.cartId}/cart-items`);
        const actualCartItem = cartItems[0];
        const actualItem = await frisby.get(`http://localhost:3000/items/${actualCartItem.itemId}`);

        const actualCartInformation = {
            customer: {
                firstName: actualCustomer.firstName,
                itemsInTheCart: [
                    {
                        description: actualItem.description,
                        price: actualItem.price,
                        quantity: actualCartItem.quantity
                    }
                ],
                lastName: actualCustomer.lastName
            }
        };

        expect(actualCartInformation).toEqual(expectedCartInformation);
    });
});
