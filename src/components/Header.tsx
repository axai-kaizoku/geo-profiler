'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function Header() {
	const { data: session }: any = useSession();
	return (
		<header>
			<nav className="w-full py-6 bg-slate-100 flex items-center px-20 justify-between">
				<h1 className="font-bold text-2xl whitespace-nowrap">
					<Link href="/">Geo Profiler.</Link>
				</h1>
				{session ? (
					<>
						<p
							className="text-black cursor-pointer hover:underline"
							onClick={() => signOut()}>
							Logout
						</p>
					</>
				) : (
					<p className="text-black cursor-pointer hover:underline">
						Admin Dashboard
					</p>
				)}
			</nav>
		</header>
	);
}
