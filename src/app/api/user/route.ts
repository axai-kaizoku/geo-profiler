import User from '@/models/User';
import connect from '@/utils/database';
import { getServerSession } from 'next-auth';

export async function GET(request: any) {
	try {
		const session = await getServerSession();
		if (!session) {
			return Response.json({ error: 'Unauthorized' });
		}
		await connect();
		const user = await User.findOne({ email: session.user?.email });
		return Response.json(user, { status: 200 });
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}
