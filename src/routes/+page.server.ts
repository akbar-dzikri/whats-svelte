import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch('https://dummyjson.com/users');
		const users = await response.json();
		return {data: users.users};
	} catch (error) {
		console.log(error);
	}
};
