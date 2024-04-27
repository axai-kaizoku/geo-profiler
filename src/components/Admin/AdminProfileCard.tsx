'use client';

import { ProfileCardProps } from '@/types';
import Image from 'next/image';
import DeleteModal from './DeleteModal';
import { useState } from 'react';
import EditModal from './EditModal';

export default function AdminProfileCard({
	src,
	name,
	desc,
	address,
}: ProfileCardProps) {
	const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
	const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
	return (
		<div className="flex bg-white w-full h-fit lg:h-60 items-center gap-8 md:gap-5 lg:gap-12 justify-between my-4 p-3 rounded-xl md:flex-row flex-col">
			<div className="pl-4">
				<Image
					src={src}
					alt="pass-port"
					width={250}
					height={250}
					className="object-contain rounded-full border "
				/>
			</div>
			<div className="flex flex-col content-between justify-between h-fit lg:h-40">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p>{desc.slice(0, desc.lastIndexOf(' ', 120)) + ' ...'}</p>
				<div className="text-slate-500 text-sm">{address}</div>
			</div>
			<div className="flex items-center gap-4 pr-6">
				<button
					onClick={() => setIsOpenEdit(true)}
					className="rounded-3xl bg-gray-200/35 text-gray-600 border px-3.5 py-1.5 text-sm">
					Edit
				</button>
				<button
					onClick={() => setIsOpenDelete(true)}
					className="rounded-3xl bg-red-100/35 text-red-700 border whitespace-nowrap px-2 py-1.5 text-sm">
					Delete
				</button>
			</div>
			<EditModal
				isOpen={isOpenEdit}
				closeModal={() => setIsOpenEdit(false)}
			/>
			<DeleteModal
				isOpen={isOpenDelete}
				closeModal={() => setIsOpenDelete(false)}
			/>
		</div>
	);
}
