import { Dialog, Transition } from '@headlessui/react';
import { AddModalProps } from '@/types';
import { Fragment } from 'react';
import Image from 'next/image';

export default function DeleteModal({ closeModal, isOpen }: AddModalProps) {
	return (
		<>
			<Transition
				appear
				show={isOpen}
				as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration 200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>
					<div className="fixed inset-0 bg-black bg-opacity-25">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration 200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
									<div className="flex w-full">
										<h3 className="text-2xl font-semibold">Delete Profile</h3>
									</div>
									<div className="flex flex-col gap-4">
										<h3 className="text-lg font-semibold">
											Are you absolutely sure?
										</h3>
										<p className=" text-sm text-muted-foreground">
											This action cannot be undone. This will permanently delete
											profile and remove profile data from server.
										</p>
										<div className="flex justify-end gap-5">
											<button
												className="border border-input p-2 bg-background hover:bg-accent hover:text-accent-foreground rounded-md"
												onClick={closeModal}>
												Cancel
											</button>
											<button className="bg-slate-900 rounded-md text-slate-50 p-2 border hover:bg-slate-900/80">
												Continue
											</button>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
