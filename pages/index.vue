<template>
	<Header></Header>
	<!-- start tournaments-section -->
	<section class="bg-maincolor py-28" id="tournaments">
		<div class="container">
			<h2 class="title-section">tournaments</h2>
			<div
				class="grid justify-center grid-cols-[repeat(1,_minmax(0,_300px))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
				id="tournaments"
			>
				<div
					v-for="game in games"
					:key="game"
					class="relative w-full max-sm:m-auto h-[500px] rounded-2xl"
				>
					<NuxtLink :href="'/tournaments/' + game.name">
						<div class="absolute w-full h-full">
							<img
								class="object-cover w-full h-full rounded-2xl"
								:src="runtimeConfig.public.cloudinary_url + game.photo_game"
								alt=""
							/>
						</div>
						<div
							class="overlay absolute w-full h-full bg-secondarycolor bg-opacity-70 rounded-2xl"
						>
							<div
								class="overlay-logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg w-52"
							>
								<img
									:src="runtimeConfig.public.cloudinary_url + game.logo_game"
								/>
							</div>
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<!-- start subscription section -->
	<section class="subscription py-28" id="subscription">
		<div class="container">
			<h2 class="title-section">subscription</h2>
			<div class="lg:flex lg:justify-evenly lg:flex-row flex flex-col">
				<form
					action=""
					class="flex flex-col lg:w-1/2 w-full lg:px-16 p-0"
					method="post"
				>
					<h3 class="text-2xl mb-10 text-center">Sign Up</h3>

					<div
						v-if="messageSignUp"
						id="toast-default"
						class="flex items-center mb-8 w-full p-4 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
						:class="message_color"
						role="alert"
					>
						<div class="ml-3 text-sm font-normal">
							{{ messageSignUp }}
						</div>
						<button
							type="button"
							class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
							data-dismiss-target="#toast-default"
							aria-label="Close"
						>
							<span class="sr-only">Close</span>
							<svg
								class="w-3 h-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
						</button>
					</div>
					<div class="mb-6">
						<label
							for="username"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Username
						</label>
						<input
							v-model="user_sign_up.username"
							type="text"
							name="username"
							id="username"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maincolor focus:border-maincolor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maincolor dark:focus:border-maincolor"
							placeholder="John"
							required
						/>
					</div>
					<div class="mb-6">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Email address
						</label>
						<input
							v-model="user_sign_up.email"
							type="email"
							name="email"
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maincolor focus:border-maincolor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maincolor dark:focus:border-maincolor"
							placeholder="john.doe@company.com"
							required
						/>
					</div>
					<div class="mb-6">
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Password
						</label>
						<input
							v-model="user_sign_up.password"
							autocomplete="on"
							type="password"
							name="password"
							id="password"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maincolor focus:border-maincolor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maincolor dark:focus:border-maincolor"
							placeholder="•••••••••"
							required
						/>
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Confirm Password
						</label>
						<input
							v-model="user_sign_up.confirm_password"
							type="password"
							name="confirm_password"
							id="confirm password"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maincolor focus:border-maincolor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maincolor dark:focus:border-maincolor"
							placeholder="•••••••••"
							required
						/>
					</div>
					<button @click.prevent="sign_up" class="button capitalize text-white">
						send
					</button>
				</form>
				<div
					v-if="!user"
					class="lg:w-[2px] lg:m-0 max-lg:h-[2px] my-14 relative bg-maincolor"
				>
					<div class="or">or</div>
				</div>
				<form
					v-if="!user"
					class="flex flex-col lg:w-1/2 w-full lg:px-16 p-0"
					method="post"
				>
					<h3 class="text-2xl mb-10 text-center">Login</h3>

					<div
						v-if="messageSignIn"
						id="toast-default"
						class="flex items-center mb-8 w-full p-4 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
						:class="message_color"
						role="alert"
					>
						<div class="ml-3 text-sm font-normal">
							{{ messageSignIn }}
						</div>
						<button
							@click="messageSignIn = ''"
							type="button"
							class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
							data-dismiss-target="#toast-default"
							aria-label="Close"
						>
							<span class="sr-only">Close</span>
							<svg
								class="w-3 h-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
						</button>
					</div>
					<div class="mb-6">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							email
						</label>
						<input
							v-model="user_sign_in.email"
							type="email"
							id="email"
							name="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maincolor focus:border-maincolor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maincolor dark:focus:border-maincolor"
							placeholder="John"
							required
						/>
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Password
						</label>
						<input
							v-model="user_sign_in.password"
							type="password"
							name="password"
							id="password"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maincolor focus:border-maincolor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maincolor dark:focus:border-maincolor"
							placeholder="•••••••••"
							required
						/>
					</div>
					<button @click.prevent="sign_in" class="button capitalize text-white">
						send
					</button>
				</form>
			</div>
		</div>
	</section>
	<!-- start about section -->
	<section class="about py-28 bg-maincolor" id="about">
		<div class="container">
			<h2 class="title-section">about</h2>
			<div
				class="about-content flex flex-col justify-between lg:flex-row gap-8"
			>
				<div class="about-inner w-full">
					<h3>frequently asked questions about our site</h3>
					<div class="questions mb-8">
						<h4 class="flex justify-between">
							Frequently Asked Question one
							<svg
								class="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 1v12m0 0 4-4m-4 4L1 9"
								/>
							</svg>
						</h4>
						<p class="max-w-lg">
							Quia iusto hic ipsam assumenda itaque exercitationem debitis
							sapiente, inventore nemo molestiae Quia iusto hic ipsam assumenda
							itaque exercitationem debitis sapiente, inventore nemo molestiae
						</p>
					</div>
					<div class="questions mb-8">
						<h4 class="flex justify-between">
							Frequently Asked Question two
							<svg
								class="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 1v12m0 0 4-4m-4 4L1 9"
								/>
							</svg>
						</h4>
						<p class="max-w-lg">
							Quia iusto hic ipsam assumenda itaque exercitationem debitis
							sapiente, inventore nemo molestiae Quia iusto hic ipsam assumenda
							itaque exercitationem debitis sapiente, inventore nemo molestiae
						</p>
					</div>
					<div class="questions mb-8">
						<h4 class="flex justify-between">
							Frequently Asked Question three
							<svg
								class="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 1v12m0 0 4-4m-4 4L1 9"
								/>
							</svg>
						</h4>
						<p class="max-w-lg">
							Quia iusto hic ipsam assumenda itaque exercitationem debitis
							sapiente, inventore nemo molestiae Quia iusto hic ipsam assumenda
							itaque exercitationem debitis sapiente, inventore nemo molestiae
						</p>
					</div>
					<div class="questions mb-8">
						<h4 class="flex justify-between">
							Frequently Asked Question four
							<svg
								class="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 1v12m0 0 4-4m-4 4L1 9"
								/>
							</svg>
						</h4>
						<p class="max-w-lg">
							Quia iusto hic ipsam assumenda itaque exercitationem debitis
							sapiente, inventore nemo molestiae Quia iusto hic ipsam assumenda
							itaque exercitationem debitis sapiente, inventore nemo molestiae
						</p>
					</div>
					<div class="questions mb-8">
						<h4 class="flex justify-between">
							Frequently Asked Question five
							<svg
								class="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 1v12m0 0 4-4m-4 4L1 9"
								/>
							</svg>
						</h4>
						<p class="max-w-lg">
							Quia iusto hic ipsam assumenda itaque exercitationem debitis
							sapiente, inventore nemo molestiae Quia iusto hic ipsam assumenda
							itaque exercitationem debitis sapiente, inventore nemo molestiae
						</p>
					</div>
				</div>
				<div class="about-img w-full rounded-3xl">
					<img class="rounded-3xl" src="~/assets/images/about-img.jpg" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
console.log(user.value);

const messageSignUp = ref("");
const messageSignIn = ref("");
const message_color = ref("");

const runtimeConfig = useRuntimeConfig();
const image = ref("");
const games = ref(null);
await $fetch("/api/games", {}).then((response) => {
	games.value = response.games;
	console.log(response);
});

const user_sign_up = ref({
	username: null,
	email: null,
	password: null,
	confirm_password: null,
});

const user_sign_in = ref({
	email: null,
	password: null,
});

const sign_up = async () => {
	console.log(user_sign_up);
	await $fetch("/api/sign_up", {
		body: user_sign_up.value,
		method: "POST",
	}).then((response) => {
		console.log(response);
		if (response.error) {
			messageSignUp.value = response.error.message;
			console.log(response);
			message_color.value = "text-red-500 bg-red-50";
		} else {
			messageSignUp.value = "sign up has been sucessfully";
			message_color.value = "text-green-500 bg-green-50";
			user_sign_up.value = "";
		}
	});
};

const sign_in = async () => {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: user_sign_in.value.email,
			password: user_sign_in.value.password,
		});
		messageSignIn.value = "login has been sucessfully";
		message_color.value = "text-green-500 bg-green-50";

		if (error) throw error;
	} catch (error) {
		messageSignIn.value = error.message;
		message_color.value = "text-red-500 bg-red-50";
	}
};
</script>
