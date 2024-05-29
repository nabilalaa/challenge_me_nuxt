<template>
	<header
		:style="{
			backgroundImage: `url(${
				runtimeConfig.public.cloudinary_url + game.photo_game
			})`,
		}"
		class="w-full bg-top bg-cover relative"
	>
		<div class="overlay w-full h-full bg-secondarycolor bg-opacity-50">
			<section class="about p-8 w-full">
				<div class="container">
					<div class="flex justify-center items-center">
						<img
							class="object-cover sm:w-[300px] sm:h-[300px]"
							:src="runtimeConfig.public.cloudinary_url + game.logo_game"
							alt=""
						/>
					</div>
				</div>
			</section>
		</div>
	</header>

	<section class="py-28">
		<div class="container">
			<div
				v-if="tournaments.length !== 0"
				class="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4"
			>
				<div
					v-for="tournament in tournaments"
					:key="tournament"
					class="max-w-sm m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
				>
					<img
						class="rounded-t-lg"
						:src="
							tournament.photo_game
								? tournament.photo_game
								: 'https://placehold.co/600x400'
						"
						alt=""
					/>
					<div class="p-5">
						<h5
							class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
						>
							{{ tournament.name }}
						</h5>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<NuxtLink
							:to="'/tournament_participants/ ' + tournament.name"
							class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-maincolor rounded-lg hover:bg-secondarycolor focus:ring-4 focus:outline-none focus:ring-thirdcolor dark:bg-blue-600 dark:hover:bg-maincolor dark:focus:ring-secbg-secondarycolor"
						>
							Read more<svg
								class="w-3.5 h-3.5 ml-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</NuxtLink>
					</div>
				</div>
			</div>
			<div v-else class="tournaments text-2xl">
				No tournaments
				<a class="text-maincolor underline capitalize" href="/#tournaments"
					>choose tournament</a
				>
			</div>
		</div>
		<!-- <NuxtPage /> -->
	</section>
</template>

<script setup>
// console.log(useRouter());
const user = useSupabaseUser();
// console.log(user.value);
if (user.value == null) {
	navigateTo("/");
}
const runtimeConfig = useRuntimeConfig();

const { data: games } = await useFetch("/api/games");

let game_id = games.value.games.find((e) => {
	return e.name === useRoute().params.tournament;
});
let game = games.value.games.find((e) => {
	return e.name === useRoute().params.tournament;
});

const { data: tournament } = await useFetch("/api/tournaments");

let tournaments = tournament.value.tournaments.filter((e) => {
	return e.game_id == game_id.id;
});
</script>
