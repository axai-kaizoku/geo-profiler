import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

import { getServerSession } from 'next-auth';
import AuthProvider from '@/utils/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Geo Profiler',
	description: 'This app is specialized in maps of different profiles',
};

export default async function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	const session = await getServerSession();

	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider session={session}>
					<Header />
					<main className="bg-slate-50">
						{modal}
						{children}
					</main>
				</AuthProvider>
			</body>
		</html>
	);
}
