'use client';
import { Dialog, Transition } from '@headlessui/react';
import { AddModalProps } from '@/types';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import validateEmail from '@/utils/email-validate';
import validateMobile from '@/utils/phone-validate';
import { UploadButton } from '@/utils/uploadthing';

export default function AddModal({ closeModal, isOpen }: AddModalProps) {
	const [error, setError] = useState<string>('');
	const [file, setFile] = useState<string>('');
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// Gather form data
		const name = e.target[0].value;
		const email = e.target[1].value;
		const phone = e.target[2].value;
		const description = e.target[3].value;
		const profileInterests = e.target[5].value;
		const address = e.target[6].value;
		const latAndLong = e.target[7].value;
		const interests = profileInterests.split(/,\s/);

		// Validate email and phone number
		if (!validateEmail(email)) {
			setError('Invalid Email address');
			return;
		}

		if (!validateMobile(phone)) {
			setError('Invalid Phone number');
			return;
		}

		if (description.length < 50) {
			setError('Minimum description should be 100 characters');
			return;
		}

		// Construct the profile data without directly including the file
		const newProfile = {
			name,
			description,
			address,
			phone,
			email,
			interests,
			latAndLong,
			photo: file,
		};
		console.log(newProfile);

		try {
			const response = await fetch('/api/profile', {
				method: 'POST',
				body: JSON.stringify({ newProfile }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response?.status === 400) {
				setError('Email already in use');
				return;
			}

			if (response?.status === 401) {
				setError('Phone already in use');
				return;
			}

			setError('');
			closeModal();
		} catch (error: any) {
			console.error(error);
			setError('An error occurred. Please try again later.');
		}
	};

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
								<Dialog.Panel className="relative w-11/12 md:w-4/5 max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
									<button
										type="button"
										onClick={closeModal}
										className="absolute top-2 right-2 z-10 w-fit p-2 bg-slate-50 rounded-full">
										<Image
											src="/x-mark.svg"
											alt="close"
											width={20}
											height={20}
											className="object-contain"
										/>
									</button>
									<div className="flex w-full">
										<h3 className="text-2xl font-semibold">Add New Profile</h3>
									</div>
									<div>
										<form
											className="space-y-4 md:space-y-6"
											onSubmit={handleSubmit}>
											<div className="w-full flex flex-col md:flex-row justify-center sm:justify-between px-4 md:px-20 py-8">
												<div className="w-full md:w-[45%] flex flex-col gap-3">
													<div>
														<label
															htmlFor="name"
															className="block mb-2 text-sm font-medium text-gray-900 ">
															Name
														</label>
														<input
															type="text"
															name="name"
															id="name"
															className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full md:w-4/5 p-2.5"
															placeholder="Eg. John Doe"
															required
														/>
													</div>
													<div>
														<label
															htmlFor="loginEmail"
															className="block mb-2 text-sm font-medium text-gray-900 ">
															Email
														</label>
														<input
															type="text"
															name="loginEmail"
															id="loginEmail"
															className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full md:w-4/5 p-2.5"
															placeholder="name@example.com"
															required
														/>
													</div>
													<div>
														<label
															htmlFor="phone"
															className="block mb-2 text-sm font-medium text-gray-900 ">
															Phone
														</label>
														<input
															type="text"
															name="phone"
															id="phone"
															placeholder="9876543210"
															className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full md:w-4/5 p-2.5"
															required
														/>
													</div>
													<div>
														<label
															htmlFor="description"
															className="block mb-2 text-sm font-medium text-gray-900 ">
															Description
														</label>
														<textarea
															name="description"
															id="description"
															placeholder="Profile or Summary"
															className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full md:w-4/5 p-2.5"
															required></textarea>
													</div>
												</div>
												<div className="w-full md:w-[45%] flex flex-col gap-3">
													<div>
														<label
															htmlFor="photo"
															className="block mb-2 text-sm font-medium text-gray-900 ">
															Photo
														</label>
														<UploadButton
															endpoint="imageUploader"
															onClientUploadComplete={(res) => {
																setFile(res[0].url);
															}}
															onUploadError={(error: Error) => {
																alert(`ERROR! ${error.message}`);
															}}
														/>
													</div>
													<div>
														<label
															htmlFor="interest"
															className="block mb-2 text-sm font-medium text-gray-900 ">
															Interests
														</label>
														<input
															type="text"
															name="interest"
															id="interest"
															className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full md:w-4/5 p-2.5"
															placeholder="Eg. Music, Cricket"
															required
														/>
													</div>
													<div>
														<label
															htmlFor="address"
															className="block mb-2 text-sm font-medium text-gray-900 ">
															Address
														</label>
														<input
															type="text"
															name="address"
															id="address"
															className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full md:w-4/5 p-2.5"
															placeholder="Eg. Hyderabad, Telangana"
															required
														/>
													</div>

													<div>
														<label
															htmlFor="loginEmailOrNumber"
															className="block mb-2 text-sm font-medium text-gray-900 ">
															Lat and Long
														</label>
														<input
															type="text"
															name="loginEmailOrNumber"
															id="loginEmailOrNumber"
															className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full md:w-4/5 p-2.5"
															placeholder="Eg. -17.8743,78.343790"
															required
														/>
													</div>
												</div>
											</div>

											<div>
												<span className="text-red-500">{error}</span>
											</div>
											<button
												type="submit"
												className="w-full border  text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
												Create
											</button>
										</form>
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
