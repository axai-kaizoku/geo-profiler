'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { formatDate } from '@/utils/format-date';
import { Skeleton } from '@/components/ui/skeleton';
import { ProfileProps, UserProps } from '@/types';
import AdminProfileCard from '@/components/Admin/AdminProfileCard';
import AddModal from '@/components/Admin/AddModal';
import { LoadingProfileCard } from '@/components/ProfileCard';

export default function Dashboard() {
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();
	const [user, setUser] = useState<UserProps>({
		name: 'Akshay',
		lastLoggedIn: new Date(),
		email: '02b3akshay@gmail.com',
		password: '#$%^$#$#',
		isAdmin: true,
		createdAt: new Date(),
	});
	const [loading, setLoading] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const fetchUser = async () => {
		try {
			const res = await fetch('/api/user');
			const data = await res.json();
			setUser(data);
		} catch (error) {
			console.error('Error fetching user:', error);
		}
	};
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

	const loadUser = async () => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	useEffect(() => {
		if (sessionStatus === 'unauthenticated') {
			router.replace('/login');
		}
	}, [sessionStatus, router]);

	useEffect(() => {
		loadUser();
		fetchUser();
	}, []);

	return (
		<section className="w-full h-fit">
			<div className="p-7 flex flex-row justify-between">
				<h1 className="text-3xl font-semibold ">Admin Dashboard</h1>
				{loading ? (
					<div className="space-y-2">
						<Skeleton className="h-5 w-28 rounded-xl" />
						<Skeleton className="h-5 w-48 rounded-xl" />
					</div>
				) : (
					<div>
						<p>{user.name}</p>
						<p className="text-xs font-extralight">
							Last logged: {formatDate(user.lastLoggedIn)}
						</p>
					</div>
				)}
			</div>
			<div className="flex items-center justify-center">
				<div className="w-full mx-5 border "></div>
			</div>
			<div className="w-full flex justify-between items-center h-fit px-12 pt-4">
				<input
					type="search"
					name="search"
					id="search"
					className="p-2 rounded-md border w-2/4 md:w-1/5 focus:outline-none"
				/>
				<button
					className="p-2 border rounded-md"
					onClick={() => setIsOpen(true)}>
					Add Profile
				</button>
				<AddModal
					isOpen={isOpen}
					closeModal={() => setIsOpen(false)}
				/>
			</div>
			<div className="w-full py-10 px-20 sm:px-28 md:px-32 lg:px-40">
				{loading
					? Array(1, 2, 3, 4).map((_, i) => <LoadingProfileCard key={i} />)
					: data!.length > 0 &&
					  data!.map((profile, i) => (
							<AdminProfileCard
								photo={profile.photo}
								name={profile.name}
								description={profile.description}
								address={profile.address}
								key={i}
							/>
					  ))}
			</div>
		</section>
	);
}
