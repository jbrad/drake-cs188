import Link from 'next/link';

export default function Index() {
	return(
	<div>
		<p>Welcome to Drake University Official Apparel!</p>
		<Link href="/items">
			<a title="Shop!">Start shopping!</a>
		</Link>
		<br></br>
		<Link href="/cart">
			<a title="view cart!">view cart!</a>
		</Link>
	</div>
	);
}