import fetch from 'isomorphic-unfetch';
import uuid from 'uuid';
import Link from 'next/link';
import { getCustomersCart } from '../../services/cart-item-service';



const addItemToCart = async (itemId) => {
    const customerResponse = await fetch('http://localhost:5555/customers');
    const [customer] = await customerResponse.json();
    const cartResponse = await fetch(`http://localhost:5555/customers/${customer.customerId}/carts`);
    const [cart] = await cartResponse.json();
    
    await fetch(`http://localhost:5555/cart-items`, {
    method: 'POST',
    body: JSON.stringify({
        cartItemId: uuid.v4(),
        cartId: `${cart.cartId}`,
        itemId,
        quantity: 1
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});
}


const Index = props => (
    <section>
        <h1>Item Details</h1>
        <img src={props.item.image} />
        <p>Description: {props.item.description}</p>
        <p>Price: ${props.item.price}</p>
        <button type="button" onClick={() => addItemToCart(props.item.itemId)}>Add to Cart</button>
        <p>Number of times this item is in the cart: {props.numberOfTimesInCart}</p>
        <Link href="/cart">
            <a title="view cart!">view cart!</a>
        </Link>
    </section>
);


Index.getInitialProps = async function(context) {
    const itemId = context.query.itemid;
    const res = await fetch(`http://localhost:5555/items/${itemId}`);
    const item = await res.json();
    const { cartItems } = await getCustomersCart();
    const numberOfTimesInCart = cartItems.filter((cartItem) => cartItem.itemId === itemId).length;
//    console.log(itemId)
//    console.log(res)
            
//    console.log(`Show data fetched. Item: ${item}` );
    
    return {
        item,
        cartItems,
        numberOfTimesInCart
    };
};

export default Index;