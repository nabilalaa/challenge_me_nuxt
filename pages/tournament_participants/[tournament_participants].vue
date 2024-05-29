<template>
	<!-- <NuxtPage /> -->

	<header class="w-full bg-top bg-cover relative">
		<div class="overlay w-full h-full bg-secondarycolor bg-opacity-50">
			<section class="prizes p-8 w-full">
				<div class="container">
					<div class="flex justify-center items-center">
						<img
							width=""
							height=""
							class="object-cover sm:w-[300px] sm:h-[300px]"
							alt=""
						/>
					</div>
				</div>
			</section>
		</div>
	</header>
	<section class="py-28">
		<div class="container">
			<button
				@click="addPlayer"
				class="text-white bg-maincolor w-full max-w-[200px] capitalize block font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
			>
				{{ status }}
			</button>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div
					class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
				>
					<h5
						class="text-xl mb-4 font-bold leading-none text-gray-900 dark:text-white"
					>
						Tournament Participants
					</h5>
					<div class="flow-root">
						{{ players.players }}
						<ul
							role="list"
							class="divide-y divide-gray-200 dark:divide-gray-700"
						>
							<li v-for="player in players" :key="player" class="py-3 sm:py-4">
								<div class="flex items-center space-x-4">
									<div class="flex-shrink-0">
										<svg
											class="w-6 h-6 text-gray-800 dark:text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 14 18"
										>
											<path
												d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
											/>
										</svg>
										<img
											width=""
											height=""
											class="w-8 h-8 rounded-full"
											src=""
											alt="Neil image"
										/>
									</div>
									<div class="flex-1 min-w-0">
										<p
											class="text-sm font-medium text-gray-900 truncate dark:text-white"
										>
											{{ player.name }}
										</p>
									</div>
								</div>
							</li>

							<h3 v-if="!players">no subs</h3>
						</ul>

						<ul class="flex w-40 border-0 m-auto -space-x-px text-sm p-4">
							<li>
								<a
									@click="prevPlayers"
									class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>Previous</a
								>
							</li>
							<li>
								<a
									@click="nextPlayers"
									class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>Next</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div
					class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-[500px]"
				>
					<div class="sm:hidden">
						<label for="tabs" class="sr-only"> Select tab </label>
					</div>
					<ul
						class="text-md font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
						id="fullWidthTab"
						data-tabs-toggle="#fullWidthTabContent"
						role="tablist"
					>
						<li class="w-full">
							<button
								@click="tabs"
								id="description-tab"
								data-tabs-target="#description"
								type="button"
								role="tab"
								aria-controls="description"
								aria-selected="true"
								class="inline-block w-full hover:text-gray-500 target:text-maincolor focus:text-maincolor text-gray-600 p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
							>
								Description
							</button>
						</li>
						<li class="w-full">
							<button
								@click="tabs"
								id="prizes-tab"
								data-tabs-target="#prizes"
								type="button"
								role="tab"
								aria-controls="prizes"
								aria-selected="false"
								class="inline-block hover:text-gray-500 focus:text-maincolor text-gray-600 w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
							>
								Prizes
							</button>
						</li>
						<li class="w-full">
							<button
								@click="tabs"
								id="notes-tab"
								data-tabs-target="#notes"
								type="button"
								role="tab"
								aria-controls="notes"
								aria-selected="false"
								class="inline-block hover:text-gray-500 focus:text-maincolor text-gray-600 w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
							>
								Notes
							</button>
						</li>
					</ul>
					<div
						id="fullWidthTabContent"
						class="border-t border-gray-200 dark:border-gray-600"
					>
						<div
							class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
							id="description"
							role="tabpanel"
							aria-labelledby="description-tab"
						>
							Description
							{{ tournament.description }}
						</div>
						<div
							class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
							id="prizes"
							role="tabpanel"
							aria-labelledby="prizes-tab"
						>
							prizes
							{{ tournament.prizes }}
						</div>
						<div
							class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
							id="notes"
							role="tabpanel"
							aria-labelledby="notes-tab"
						>
							notes

							{{ tournament.notes }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
function tabs(e) {
	document.querySelectorAll("[role=tabpanel]").forEach((e) => {
		e.classList.add("hidden");
	});

	document
		.querySelector(`[aria-labelledby=${e.target.id}]`)
		.classList.remove("hidden");
}
// console.log(useRoute());
const supabase = useSupabaseClient();
let from = 0;
let to = 2;
const user = useSupabaseUser();
// console.log(user.value);
const tournament = ref();
// let players = ref([]);
let currentPage = ref(1);
const countt = ref();
const status = ref();

await $fetch("/api/tournaments").then((response) => {
	// console.log(response);
	//
	tournament.value = response.tournaments[0];
});

// const { data } = await useFetch(
// 	"https://challenge-me-f3x4.onrender.com/api/players?page=1"
// );

// console.log(players.value);
let page = 1;

async function nextPlayers() {
	// page++;

	// const { data } = await useFetch(
	// 	`https://challenge-me-f3x4.onrender.com/api/players?page=${page}`
	// );
	if (countt.value > to) {
		from += 3;
		to += 3;
		getplayers(from, to);

		// players.value = data.value;
	}
}
// console.log(nextPlayers());

async function prevPlayers() {
	if (from !== 0) {
		from -= 3;
		to -= 3;
		getplayers(from, to);

		// page--;
		// const { data } = await useFetch(
		// 	`https://challenge-me-f3x4.onrender.com/api/players?page=${page}`
		// );
		// players.value = data.value;
	}
}

const { data: players } = await useLazyFetch("/api/players", {
	fetchOnServer: false,
	server: false,
});

const message = players.value.players.filter((e) => {
	// console.log(e.name);
	return e.name === user.value.user_metadata.username;
	// if (e.name == user.value.user_metadata.username) {
	// }
});
console.log(message);

async function addPlayer() {
	if (message.length == 0) {
		const data = await useFetch("/api/players", {
			method: "post",
			body: {
				name: user.value.user_metadata.username,
				tournament_id: tournament.value.id,
			},
		});
		status.value = "leave";
		await getplayers(from, to);

		console.log(data.data);
	} else {
		const data = await useFetch("/api/players", {
			method: "delete",
			body: {
				name: user.value.user_metadata.username,
			},
		});
		await getplayers(from, to);
		status.value = "join";
		console.log(data.data);
	}
}

onMounted(async () => {
	if (message.length == 0) {
		status.value = "join";
	} else {
		status.value = "leave";
	}
	await getplayers(from, to);
	await countplayers();
});
// const fetchItems = async () => {
async function countplayers() {
	const { data, error } = await supabase.from("challenge_me_player").select();

	countt.value = data.length;
}
async function getplayers(from, to) {
	const { pending, data, error } = await supabase
		.from("challenge_me_player")
		.select()
		.range(from, to);
	if (error) {
		console.log(error);
	} else {
		players.value = data;
	}
}

// };
</script>
