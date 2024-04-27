'use client';
import ProfileCard, { LoadingProfileCard } from '@/components/ProfileCard';
import { ProfileProps } from '@/types';
import { useEffect, useState } from 'react';

export default function Home() {
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<ProfileProps[]>();

	const fetchProfiles = async () => {
		setLoading(true);
		const response = await fetch('/api/profile');
		const profileData = await response.json();
		setData(profileData);
		setLoading(false);
	};

	useEffect(() => {
		fetchProfiles();
	}, []);

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
						? Array(1, 2, 3, 4).map((_, i) => <LoadingProfileCard key={i} />)
						: data!.map((profile, i) => (
								<ProfileCard
									photo={profile.photo}
									name={profile.name}
									description={profile.description}
									address={profile.address}
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
