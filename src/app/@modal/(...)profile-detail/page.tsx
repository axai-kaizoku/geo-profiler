'use client';

import Modal from '@/components/Modal';
import Image from 'next/image';

export default function ModalProfileDetail({
	searchParams,
}: {
	searchParams: { query: string };
}) {
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
		console.log(data);
	};
	// useEffect(() => {
	// 	fetchMap();
	// }, []);
	return (
		<Modal modalClose={() => {}}>
			<div className="flex w-full items-center h-fit p-8 md:h-[60vh] justify-center">
				<div className="w-4/5 flex flex-col md:flex-row gap-6 md:gap-10 lg:justify-between">
					<div className="flex w-full md:w-2/6 flex-col">
						<div>
							<Image
								src=""
								alt="pass"
								width={300}
								height={300}
								className="object-cover border rounded-full"
							/>
						</div>
					</div>
					<div className="flex w-full lg:w-2/3 flex-col max-sm:gap-3 justify-between">
						<h4 className="text-2xl font-semibold">Akshay Yelle</h4>
						<p>
							Utilise external map services like Google Maps or Mapbox to
							integrate the mapping functionality into the application. This
							entails setting
						</p>
						<p>
							<span className="font-medium">Email: </span> 02b3akshay@gmail.com
						</p>
						<p>
							<span className="font-medium">Phone: </span> 9876543210
						</p>
						<p>
							<span className="font-medium">Address: </span> Hyderabad,
							Telangana
						</p>
						<p>
							<span className="font-medium">Interests: </span> Anime, games
						</p>
					</div>
				</div>
			</div>
		</Modal>
	);
}
