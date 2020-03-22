const uuid = require('uuid');

const {
    getAllCarts,
    getCartByCartId,
    getCartsByCustomerId
} = require('../../services/cart-service');
const {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId
} = require('../../repositories/cart-repository');

jest.mock('../../repositories/cart-repository');

describe('getAllCarts', () => {
    let expectedFirstCart,
        expectedFirstCartId,
        expectedCustomerId;

    beforeEach(() => {
        expectedFirstCartId = uuid.v4();
        expectedCustomerId = uuid.v4();

        expectedFirstCart = {
            cartId: expectedFirstCartId,
            customerId: expectedCustomerId
        };

        selectCarts.mockReturnValue({
            rows: [{
                'cart_id': expectedFirstCartId,
                'customer_id': expectedCustomerId
            }]
        });

        selectCartsByCustomerId.mockReturnValue({
            rows: [{
                'cart_id': expectedFirstCartId,
                'customer_id': expectedCustomerId
            }]
        });

        selectCartByCartId.mockReturnValue({
            'cart_id': expectedFirstCartId,
            'customer_id': expectedCustomerId
        });
    });

    it('should get all the carts', () => {
        const actualCarts = getAllCarts();

        expect(selectCarts).toHaveBeenCalledTimes(1);

        expect(actualCarts).toEqual([
            expectedFirstCart
        ]);
    });

    it('should get a cart by a specific cartId', () => {
        const actualCart = getCartByCartId(expectedFirstCartId);

        expect(selectCartByCartId).toHaveBeenCalledTimes(1);
        expect(selectCartByCartId).toHaveBeenCalledWith(expectedFirstCartId);

        expect(actualCart).toEqual(expectedFirstCart);
    });

    it('should get all the carts by customerId', () => {
        const actualCarts = getCartsByCustomerId(expectedCustomerId);

        expect(selectCartsByCustomerId).toHaveBeenCalledTimes(1);
        expect(selectCartsByCustomerId).toHaveBeenCalledWith(expectedCustomerId);

        expect(actualCarts).toEqual([
            expectedFirstCart
        ]);
    });
});
