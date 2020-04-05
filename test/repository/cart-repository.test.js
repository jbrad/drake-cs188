const uuid = require('uuid');

const {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId,
    deleteCartByCartId,
    insertCart,
    updateCart
} = require('../../repositories/cart-repository');

describe('cart repository', () => {
    let firstCartId,
        secondCartId,
        expectedCustomerId,
        expectedFirstCart,
        expectedSecondCart,
        expectedCartId;

    beforeEach(() => {
        firstCartId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f21';
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

            expect(actualCarts).toEqual({
                rows: [expectedFirstCart, expectedSecondCart]
            })
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

    describe('deleteCartByCartId', () => {
        it('should delete a cart by cartId', () => {
            deleteCartByCartId(firstCartId);

            const actualCarts = selectCarts();

            expect(actualCarts).toEqual({
                rows: [expectedSecondCart]
            });
        });
    });

    describe('insertCart', () => {
        it('should insert a new cart', () => {
            const newCart = {
                'cart_id': uuid.v4(),
                'customer_id': uuid.v4()
            };

            insertCart(newCart);

            const actualCarts = selectCarts();
            console.log(actualCarts)

            expect(actualCarts).toEqual({
                rows: [expectedSecondCart, expectedFirstCart, newCart]
            }
            );
        });
    });

    describe('updateCart', () => {
        it('should insert a new carts', () => {
            const updatedCart = {
                'cart_id': expectedCartId,
                'customer_id': 'c2e688b4-ad19-4441-b06a-adc7b9420308'
        };

            updateCart(updatedCart);

            const actualCart = selectCartByCartId(expectedCartId);

            expect(actualCart).toEqual(updatedCart);
        });
    });
});
