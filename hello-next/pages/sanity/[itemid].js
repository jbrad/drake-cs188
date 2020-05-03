const Index = props => (
    <section>
        <h1>Item Details</h1>
        <img src ={props.item.image} />
        <p>Description: {props.item.description}</p>
        <p>Price: ${props.item.price}</p>
    </section>
);


index.getInitialProps = async function(context) {
    const {itemId} = context.query;
    const res = await fetch( input `http://localhost:5555/item/${itemId}`);
    const item = await res.json();
            
    console.log(`Show data fetched. Item: ${item}` );
    
    return {
        item
    };
};

export default Index;