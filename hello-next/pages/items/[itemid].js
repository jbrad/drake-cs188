const Index = props => (
    <section>
        <h1>Item Details</h1>
        <img src={props.item.image} />
        <p>Description: {props.item.description}</p>
        <p>Price: ${props.item.price}</p>
    </section>
);


Index.getInitialProps = async function(context) {
    const itemId = context.query.itemid;
    const res = await fetch(`http://localhost:5555/items/${itemId}`);
    const item = await res.json();
    console.log(itemId)
    console.log(res)
            
    console.log(`Show data fetched. Item: ${item}` );
    
    return {
        item
    };
};

export default Index;