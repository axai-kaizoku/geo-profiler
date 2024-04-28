'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { ProfileProps } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfileDetail({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const [loading, setLoading] = useState<boolean>(true);
	const [profile, setProfile] = useState<ProfileProps>();
	const fetchProfile = async () => {
		setLoading(true);
		const id = searchParams.query;
		const response = await fetch('/api/single-profile', {
			method: 'POST',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		setProfile(data);
		setLoading(false);
	};
	useEffect(() => {
		fetchProfile();
	}, []);
	return (
		<>
			{loading ? (
				<ProfileDetailSkeleton />
			) : (
				<div className="flex w-full items-center h-[89vh] justify-center">
					<div className="w-4/5 flex flex-col md:flex-row gap-6 md:gap-10 lg:justify-between">
						<div className="flex w-full md:w-2/6 flex-col">
							<div>
								<Image
									src={profile?.photo as string}
									alt="pass"
									width={300}
									height={300}
									className="object-cover border rounded-full"
								/>
							</div>
						</div>
						<div className="flex w-full lg:w-2/3 flex-col max-sm:gap-3 justify-between">
							<h4 className="text-2xl font-semibold">{profile?.name}</h4>
							<p>{profile?.description}</p>
							<p>
								<span className="font-medium">Email: </span> {profile?.email}
							</p>
							<p>
								<span className="font-medium">Phone: </span> {profile?.phone}
							</p>
							<p>
								<span className="font-medium">Address: </span>{' '}
								{profile?.address}
							</p>
							<p>
								<span className="font-medium">Interests: </span>{' '}
								{profile?.interests?.join(', ')}
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export const ProfileDetailSkeleton = () => {
	return (
		<>
			<div className="flex w-full items-center h-[89vh] justify-center">
				<div className="w-4/5 flex flex-col md:flex-row gap-6 md:gap-10 lg:justify-between">
					<div className="flex w-full md:w-2/6 flex-col">
						<div>
							<Skeleton className="h-[300px] w-[300px] rounded-full" />
						</div>
					</div>
					<Skeleton className="flex w-full lg:w-2/3 flex-col max-sm:gap-3 justify-between" />
					{/* <div className="flex w-full lg:w-2/3 flex-col max-sm:gap-3 justify-between">
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
					</div> */}
				</div>
			</div>
		</>
	);
};
