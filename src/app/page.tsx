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
		<main className=" min-h-screen flex justify-center py-10 w-full">
			<section className="w-3/4 flex-col  flex">
				{loading
					? data.map((_, i) => <LoadingProfileCard key={i} />)
					: data.map((_, i) => (
							<ProfileCard
								src="/pass.png"
								name="John Deo"
								desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
						quod nam est odio possimus quisquam, necessitatibus ex? Illo
						exercitationem ex sed, nulla ullam voluptatibus atque quia
						repudiandae! Repellendus, beatae ex.repudiandae! Repellendus, beatae
						ex."
								address="Hyd, Telangana"
								key={i}
							/>
					  ))}
			</section>
		</main>
	);
}
