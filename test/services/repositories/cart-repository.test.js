const uuid = require('uuid');

const {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId
} = require('../../repositories/cart-repository');

describe('cart repository', () => {
    let firstCartId,
        secondCartId,
        expectedCustomerId,
        expectedFirstCart,
        expectedSecondCart;

    beforeEach(() => {
        firstCartId = '44ef41f4-485b-44d6-8635-7418e026be89';
        secondCartId = '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3';
        expectedCustomerId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';

        expectedFirstCart = {
            'cart_id': firstCartId,
            'customer_id': expectedCustomerId
        };
        expectedSecondCart = {
            'cart_id': secondCartId,
            'customer_id': expectedCustomerId
        };
    });

    describe('selectCarts', () => {
        it('should return all the carts', () => {
            const actualCarts = selectCarts();
            const [actualFirstCart, actualSecondCart] = actualCarts.rows;

            expect(actualFirstCart).toEqual(expectedFirstCart);
            expect(actualSecondCart).toEqual(expectedSecondCart);
        });
    });

    describe('selectCartByCartId', () => {
        it('should return a specific cart by cartId', () => {
            const actualFirstCart = selectCartByCartId(firstCartId);

            expect(actualFirstCart).toEqual({
                'cart_id': firstCartId,
                'customer_id': expectedCustomerId
            });

            const actualSecondCart = selectCartByCartId(secondCartId);

            expect(actualSecondCart).toEqual({
                'cart_id': secondCartId,
                'customer_id': expectedCustomerId
            });
        });
    });

    describe('selectCartsByCustomerId', () => {
        it('should return carts by a customerId', () => {
            const actualCarts = selectCartsByCustomerId(expectedCustomerId);

            expect(actualCarts.rows).toEqual([
                expectedFirstCart,
                expectedSecondCart
            ]);
        });

        it('should return no rows if there are no carts for a customerId', () => {
            const actualCarts = selectCartsByCustomerId(uuid.v4());

            expect(actualCarts.rows).toEqual([]);
        });
    });
});
