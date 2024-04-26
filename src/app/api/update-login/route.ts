import User from '@/models/User';
import connect from '@/utils/database';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
	const { email } = await request.json();
	await connect();

	try {
		const user = await User.findOneAndUpdate(
			{
				email: email,
			},
			{ lastLoggedIn: new Date() },
		);
		return Response.json(user, { status: 200 });
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}
