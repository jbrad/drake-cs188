import fetch from 'isomorphic-unfetch';

const Index = props => (
    <section>
        <h1>{props.customer.firstName}'s Cart</h1>
        <p>You have {props.cartItems.length} {props.cartItems.length === 1 ? 'item' : 'items'} in your cart.</p>
    </section>
);


Index.getInitialProps = async function() {
    const customerResponse = await fetch(`http://localhost:5555/customers`);
    const [customer] = await customerResponse.json();
    const cartResponse = await fetch(`http://localhost:5555/customers/${customer.customerId}/carts`);
    const [cart] = await cartResponse.json();
    const cartItemResponse = await fetch(`http://localhost:5555/carts/${cart.cartId}/cart-items`);
    const cartItems = await cartItemResponse.json();
    
    return {
        customer,
        cartItems
    };
};

export default Index;