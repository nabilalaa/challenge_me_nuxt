import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event);
	const { data } = await client.from("challenge_me_tournament").select("*");
	return { tournaments: data };
});

// use `prisma` in your application to read and write data in your DB
