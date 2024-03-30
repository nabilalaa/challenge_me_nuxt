import { serverSupabaseClient } from "#supabase/server";

// import { createClient } from "@supabase/supabase-js";

// // Create a single supabase client for interacting with your database
// const supabase = createClient(
// 	"https://owksxfxxjhfgizpcezpo.supabase.co",
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93a3N4Znh4amhmZ2l6cGNlenBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0MjUzMzEsImV4cCI6MjAxNDAwMTMzMX0.UksAqX4Q5DZVAEH3uu_Yy2W5nvcFTq4w4wnGY3BT-3w"
// );
export default defineEventHandler(async (event) => {
	const supabase = serverSupabaseClient(event);

	const user = await readBody(event);

	const data = (await supabase).auth.signInWithPassword({
		email: user.email,
		password: user.password,
	});

	return data;
});
