import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const supabase = await serverSupabaseClient(event);

	const user = await readBody(event);
	console.log(user);
	const { data, error } = await supabase
		.from("challenge_me_player")
		.insert(user)
		.select();
	return data;

	// await supabase.auth.verifyOtp({
	// 	token_hash: tokenHash,
	// 	type: "email",
	// });
});
