import Profile from '@/models/Profile';
import connect from '@/utils/database';
import { NextResponse } from 'next/server';

export async function GET(request: any) {
	try {
		await connect();
		const profiles = await Profile.find();
		return Response.json(profiles, { status: 200 });
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}

export async function PUT(request: any) {
	await connect();
	const { newProfile } = await request.json();

	try {
		const email = newProfile.email;
		const phone = newProfile.phone;

		const existingEmail = await Profile.findOne({ email });
		const existingPhone = await Profile.findOne({ phone });

		if (existingEmail) {
			return new NextResponse('Email is already in use', { status: 400 });
		}
		if (existingPhone) {
			return new NextResponse('Phone is already in use', { status: 401 });
		}
		const profile = new Profile(newProfile);
		await profile.save();
		return Response.json({ profile }, { status: 201 });
	} catch (error: any) {
		console.error(error);
		return new NextResponse(error, { status: 500 });
	}
}

export async function POST(request: any) {
	await connect();
	const { newProfile } = await request.json();

	try {
		const email = newProfile.email;
		const phone = newProfile.phone;

		const existingEmail = await Profile.findOne({ email });
		const existingPhone = await Profile.findOne({ phone });

		if (existingEmail) {
			return new NextResponse('Email is already in use', { status: 400 });
		}
		if (existingPhone) {
			return new NextResponse('Phone is already in use', { status: 401 });
		}
		const profile = new Profile(newProfile);
		await profile.save();
		return Response.json({ profile }, { status: 201 });
	} catch (error: any) {
		console.error(error);
		return new NextResponse(error, { status: 500 });
	}
}

export async function DELETE(request: any) {
	try {
		const { id } = await request.json();
		await connect();
		await Profile.findByIdAndDelete(id);
		return new Response('Profile Deleted', { status: 200 });
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}
