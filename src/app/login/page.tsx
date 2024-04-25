'use client';
import { useState } from 'react';

export default function Login() {
	const [error, setError] = useState<string>('');
	return (
		<>
			<div className="bg-white flex flex-col items-center justify-center mx-auto py-8">
				<div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<div
							className={`text-xl font-bold   text-center leading-tight tracking-tight text-gray-900 md:text-2xl hover:cursor-default`}>
							Admin Login
						</div>
						<form className="space-y-4 md:space-y-6">
							<div>
								<label
									htmlFor="loginEmailOrNumber"
									className="block mb-2 text-sm font-medium text-gray-900 ">
									Your email / number
								</label>
								<input
									type="text"
									name="loginEmailOrNumber"
									id="loginEmailOrNumber"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
									placeholder="name@example.com / 9909192900"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="signinPassword"
									className="block mb-2 text-sm font-medium text-gray-900 ">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="signinPassword"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
									required
								/>
							</div>
							<div>
								<span className="text-red-500">{error}</span>
							</div>
							<button
								type="submit"
								className="w-full border  text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
