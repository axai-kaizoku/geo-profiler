'use client';
import useUser from '@/hooks/use-user';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { formatDate } from '@/utils/format-date';
import { Skeleton } from '@/components/ui/skeleton';

export default function Dashboard() {
	const user = useUser();
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();
	const [loading, setLoading] = useState<boolean>(true);

	const loadUser = async () => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	useEffect(() => {
		if (sessionStatus === 'unauthenticated') {
			router.replace('/login');
		}
		loadUser();
	}, [sessionStatus, router]);

	return (
		<section className="w-full h-[89vh]">
			<div className="p-7 flex flex-row justify-between">
				<h1 className="text-3xl font-semibold ">Admin Dashboard</h1>
				{loading ? (
					<div className="space-y-2">
						<Skeleton className="h-5 w-28 rounded-xl" />
						<Skeleton className="h-5 w-48 rounded-xl" />
					</div>
				) : (
					<div>
						<p>{user!.name}</p>
						<p className="text-xs font-extralight">
							Last logged: {formatDate(user!.lastLoggedIn)}
						</p>
					</div>
				)}
			</div>
			<div className="flex items-center justify-center">
				<div className="w-full mx-5 border "></div>
			</div>
		</section>
	);
}
