import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
    <section>
        <h1> Items Available for Sale</h1>
        <ul>
            {props.items.map(item => (
                <li key={item.itemId}>
                    <Link href="/items/[itemId]" as={`/items/${item.itemId}`}>
                        <a>{item.description}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </section>
);


Index.getInitialProps = async function() {
    const res = await fetch(`http://localhost:5555/items`);
    const items = await res.json();
    
    console.log(`Show data fetched. Count: ${items.length}`);
                          
    return {
        items
    };
};

export default Index;	