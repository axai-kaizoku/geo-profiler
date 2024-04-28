import Profile from '@/models/Profile';
import connect from '@/utils/database';

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } },
) {
	await connect();
	try {
		const { title, content } = await request.json();
		const profile = await Profile.findOne({ _id: params.id });
		await profile.save();
		return Response.json(profile, { status: 200 });
	} catch (error: any) {
		console.error('Error fetching post:', error);
		return Response.json({ error: 'Internal server error' }, { status: 500 });
	}
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } },
) {
	await connect();
	try {
		await Profile.findByIdAndDelete(params.id);
		return Response.json({ message: 'Deleted Successfully' }, { status: 200 });
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}
