'use client';
import GoogleMaps from '@/components/GoogleMaps';
import { ProfileProps } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Summary({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const [src, setSrc] = useState<ProfileProps>();
	const fetchMap = async () => {
		const id = searchParams.query;
		const response = await fetch('/api/single-profile', {
			method: 'POST',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		// console.log(data);
		setSrc(data);
	};
	useEffect(() => {
		fetchMap();
	}, []);
	return (
		<>
			<div className="flex justify-start p-4 w-full">
				<Link
					href="/"
					className="p-2 border rounded-md">
					Back
				</Link>
			</div>
			<GoogleMaps src={src?.latAndLong!} />
			{/* {JSON.stringify(src)} */}
		</>
	);
}
