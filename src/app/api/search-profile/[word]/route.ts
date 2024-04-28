import Profile from '@/models/Profile';
import { NextResponse } from 'next/server';

export async function POST(
	request: any,
	{ params }: { params: { word: string } },
) {
	try {
		const word = params.word;
		console.log(params.word);
		const results = await Profile.find({
			$or: [
				{ name: { $regex: word, $options: 'i' } },
				{ description: { $regex: word, $options: 'i' } },
				{ address: { $regex: word, $options: 'i' } },
				{ email: { $regex: word, $options: 'i' } },
				{ phone: { $regex: word, $options: 'i' } },
			],
		});

		return Response.json(results, { status: 200 });
	} catch (error: any) {
		console.error(error);
		return new NextResponse(error, { status: 500 });
	}
}
