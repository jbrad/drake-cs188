import Link from 'next/link';

export default function Index() {
	return(
	<div>
		<p>Welcome to Drake University Official Apparel!</p>
		<Link href="/items">
			<a title="Start shopping!">Start shopping!</a>
		</Link>
		<Link href="/sanity">
			<a title="Also cool!">yolo!</a>
		</Link>
	</div>
	);
}