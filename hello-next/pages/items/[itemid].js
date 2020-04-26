import fetch from 'isomorphic-unfetch';
import uuid from 'uuid';

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
    </section>
);


Index.getInitialProps = async function(context) {
    const itemId = context.query.itemid;
    const res = await fetch(`http://localhost:5555/items/${itemId}`);
    const item = await res.json();
//    console.log(itemId)
//    console.log(res)
            
//    console.log(`Show data fetched. Item: ${item}` );
    
    return {
        item
    };
};

export default Index;