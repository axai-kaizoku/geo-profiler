'use client';
import ProfileCard, { LoadingProfileCard } from '@/components/ProfileCard';
import { useEffect, useState } from 'react';

export default function Home() {
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		setInterval(() => {
			setLoading(false);
		}, 2000);
	}, []);
	const data = [1, 2, 3, 4, 5];
	return (
		<>
			<section className="w-full flex justify-center  py-8">
				<div className="w-3/4 flex">
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Search.."
						className="p-2 rounded-lg shadow-md border w-full md:w-2/4 focus:outline-none"
					/>
				</div>
			</section>
			<section className="min-h-screen flex justify-center pb-10 w-full">
				<div className="w-3/4 flex-col h-fit flex">
					{loading
						? data.map((_, i) => <LoadingProfileCard key={i} />)
						: data.map((_, i) => (
								<ProfileCard
									src="/pass.png"
									name="John Deo"
									desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
						quod nam est odio possimus quisquam, necessitatibus ex? Illo
						exer"
									address="Hyd, Telangana"
									key={i}
								/>
						  ))}
				</div>
			</section>
			{/* <div className="p-20">
				<GoogleMaps address="sircilla" />
			</div> */}
		</>
	);
}
