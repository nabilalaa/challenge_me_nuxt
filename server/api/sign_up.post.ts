import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const supabase = serverSupabaseClient(event);

	const user = await readBody(event);
	const data = (await supabase).auth.signUp({
		email: user.email,
		password: user.password,
	});

	return data;

	// await supabase.auth.verifyOtp({
	// 	token_hash: tokenHash,
	// 	type: "email",
	// });
});
