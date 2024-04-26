import { ProfileCardProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProfileCard({
	src,
	name,
	desc,
	address,
}: ProfileCardProps) {
	return (
		<div className="flex bg-white w-full h-52 items-center gap-12 justify-between my-4 p-3 rounded-xl">
			<div className="pl-4">
				<Image
					src={src}
					alt="pass-port"
					width={280}
					height={280}
					className="object-contain rounded-full border "
				/>
			</div>
			<div className="flex flex-col content-between h-40 justify-between">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p>{desc}</p>
				<div className="flex justify-between pr-20">
					<div className="text-slate-500 text-sm">{address}</div>
					<div className="flex  gap-6">
						<Link
							href="/summary"
							className="rounded-3xl border px-2 py-1.5 text-sm">
							Summary
						</Link>
						<Link
							href="/detail-map"
							className="rounded-3xl border px-2 py-1.5 text-sm">
							Map detail
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export const LoadingProfileCard = () => {
	return (
		<>
			<div className="flex bg-white w-full h-52 items-center gap-16 justify-start my-4 p-3 rounded-xl">
				<div className="pl-4">
					<Skeleton className="w-[180px] h-[180px] rounded-[50%]" />
				</div>
				<div className="flex flex-col gap-3 content-between h-44 w-full justify-between">
					<Skeleton className="h-6 w-2/12 rounded-xl" />
					<Skeleton className="h-32 w-full rounded-xl" />
					<Skeleton className="h-6 w-full rounded-xl" />
				</div>
			</div>
		</>
	);
};
