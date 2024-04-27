'use client';
// import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect, useState } from 'react';

export default function GoogleMaps({ src }: { src: string }) {
	// const mapRef = React.useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	const initMap = async () => {
	// 		const loader = new Loader({
	// 			apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY as string,
	// 			version: 'weekly',
	// 		});

	// 		const { Map } = await loader.importLibrary('maps');
	// 		const position = {
	// 			lat: 43.642693,
	// 			lng: -79.3871189,
	// 		};

	// 		// map options
	// 		const mapOptions: google.maps.MapOptions = {
	// 			center: position,
	// 			zoom: 17,
	// 			mapId: 'MY_NEXTJS_MAPID',
	// 		};

	// 		// setup the map
	// 		const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
	// 	};
	// 	initMap();
	// }, []);

	// const [address, setAddress] = useState<string>('');
	// useEffect(() => {
	// 	setAddress('sircilla');
	// }, [address]);

	return (
		<>
			{/* <div
				style={{ height: '500px' }}
				ref={mapRef}
			/> */}

			<div className="p-5">
				<iframe
					width="100%"
					height="500"
					src={src}></iframe>
			</div>
		</>
	);
}
