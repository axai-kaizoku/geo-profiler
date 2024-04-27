'use client';
import GoogleMaps from '@/components/GoogleMaps';
import { useEffect, useState } from 'react';

export default function Summary({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const [src, setSrc] = useState<string>(
		'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=india+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
	);
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
		setSrc(data.latAndLong);
	};
	// useEffect(() => {
	// 	fetchMap();
	// }, []);
	return (
		<>
			<GoogleMaps src={src} />
			{/* {JSON.stringify(src)} */}
		</>
	);
}
