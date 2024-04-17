import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const supabase = await serverSupabaseClient(event);

	let { data: players, error } = await supabase
		.from("challenge_me_player")
		.select("*");

	return { players };
});
