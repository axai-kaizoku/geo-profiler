import Profile from '@/models/Profile';
import connect from '@/utils/database';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
	try {
		const { id } = await request.json();
		await connect();
		const profile = await Profile.findOne({ _id: id });
		return Response.json(profile, { status: 200 });
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}
