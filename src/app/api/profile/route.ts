import Profile from '@/models/Profile';
import connect from '@/utils/database';
import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET(request: any) {
	try {
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}

export async function PUT(request: any) {
	try {
		const { name, description, address, phone, email, interests, latAndLong } =
			await request.json();
		const { photo } = await request.files();
		await connect();

		const profile = await Profile.findByIdAndUpdate(request.params.pid, {
			...request.json(),
		});

		if (photo) {
			profile.photo.data = fs.readFileSync(photo.path);
			profile.photo.contentType = photo.type;
		}
		profile.updatedAt = new Date();
		await profile.save();
		return Response.json({ profile }, { status: 201 });
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}

export async function POST(request: any) {
	try {
		// await upload.single('photo')(request);

		const { name, description, address, phone, email, interests, latAndLong } =
			await request.json();
		const photo = request.file;
		await connect();

		const existingEmail = await Profile.findOne({ email });
		const existingPhone = await Profile.findOne({ phone });

		if (existingEmail) {
			return new NextResponse('Email is already in use', { status: 400 });
		}
		if (existingPhone) {
			return new NextResponse('Phone is already in use', { status: 401 });
		}

		const newProfile = new Profile({
			name,
			description,
			address,
			phone,
			email,
			interests,
			latAndLong,
		});

		if (photo) {
			newProfile.photo.data = fs.readFileSync(photo.path);
			newProfile.photo.contentType = photo.mimetype;
		}

		await newProfile.save();
		return Response.json({ newProfile }, { status: 201 });
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}

export async function DELETE(request: any) {
	try {
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}
