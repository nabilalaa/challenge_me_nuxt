<template>
	<nav class="bg-maincolor border-gray-200 dark:bg-secondarycolor">
		<div class="container">
			<div
				class="max-w-screen-xl flex flex-wrap items-center max-sm:flex-col max-sm:justify-center justify-between mx-auto p-4"
			>
				<NuxtLink href="/" class="flex items-center">
					<div class="text-xl text-center logo max-sm:mb-4">
						challenge <span>me</span>
					</div>
				</NuxtLink>

				<div class="relative flex items-center lg:order-3">
					<button
						id="btnUserMenu"
						v-if="user"
						@click="toggleMenu"
						type="button"
						class="flex w-8 h-8 p-2 justify-center items-center mr-3 text-sm bg-gray-800 rounded-full lg:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
					>
						<span class="sr-only">Open user menu</span>
						<svg
							class="w-full h-full text-white dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 14 18"
						>
							<path
								d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
							/>
						</svg>
						<!-- <img
						class="w-8 h-8 rounded-full object-cover"
						src="https://placehold.co/600x400"
						alt="user photo"
					/> -->
					</button>
					<div
						v-show="menu"
						class="dropdownMenu z-50 absolute -right-4 top-6 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
					>
						<div class="px-4 py-3">
							<span class="block text-sm text-gray-900 dark:text-white">{{
								user ? user.email : ""
							}}</span>
							<span
								class="block text-sm text-gray-500 truncate dark:text-gray-400"
							></span>
						</div>
						<ul class="py-2" aria-labelledby="user-menu-button">
							<li>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									><div>Settings</div></a
								>
							</li>

							<li>
								<a
									@click="signOut"
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									><div>Sign out</div></a
								>
							</li>
						</ul>
					</div>
					<!-- Dropdown menu -->

					<li v-if="!user" class="list-none">
						<a
							href="/#subscription"
							class="block border-secondarycolor border mr-4 p-2 text-secondarycolor bg-maincolor rounded lg:bg-transparent lg:dark:text-blue-500"
							aria-current="page"
							>Login</a
						>
					</li>
					<button
						aria-controls="navbar-user"
						aria-expanded="false"
						data-collapse-toggle="navbar-user"
						type="button"
						class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondarycolor rounded-lg lg:hidden hover:bg-[#f1faee] focus:outline-none focus:ring-2 focus:ring-[#f1faee] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>

				<div
					class="items-center hidden justify-between w-full lg:flex lg:w-auto lg:order-2"
					id="navbar-user"
				>
					<ul
						class="flex flex-col mt-4 font-medium p-4 lg:p-0 border border-gray-100 rounded-lg bg-[#f1faee] lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
					>
						<li>
							<NuxtLink
								href="/"
								class="block py-2 pl-3 pr-4 text-secondarycolor bg-maincolor rounded lg:bg-transparent lg:p-0 lg:dark:text-blue-500"
								aria-current="page"
								><div>Home</div></NuxtLink
							>
						</li>

						<li>
							<NuxtLink
								href="/#tournaments"
								class="block py-2 pl-3 pr-4 text-secondarycolor rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
								><div>Tournaments</div></NuxtLink
							>
						</li>

						<li>
							<a
								href="/#subscription"
								class="block py-2 pl-3 pr-4 text-secondarycolor rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
								><div>Subscription</div></a
							>
						</li>
						<li>
							<a
								href="/#about"
								class="block py-2 pl-3 pr-4 text-secondarycolor rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
								><div>About</div></a
							>
						</li>
						<!-- <li>
						<a
							href="#"
							class="block py-2 pl-3 pr-4 text-secondarycolor rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							><div>About</div></a
						>
					</li> -->
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>
<script setup>
const menu = ref(false);
const user = useSupabaseUser();
const supabase = useSupabaseClient();

function signOut() {
	console.log("signout");
	supabase.auth.signOut();
	navigateTo("/");
}

function toggleMenu() {
	menu.value = !menu.value;
}

onMounted(() => {
	document.addEventListener("click", (e) => {
		if (
			!document.querySelector(".dropdownMenu").contains(e.target) &&
			!document.querySelector("#btnUserMenu").contains(e.target)
		) {
			menu.value = false;
		}
	});
});

// document.querySelector("#navbar-btn").addEventListener("click", () => {
// 	document.querySelector("#navbar-user").classList.toggle("hidden");
// });

// document.querySelector("#user-menu-button").addEventListener("click", () => {
// 	document.querySelector("#user-dropdown").classList.toggle("hidden");
// });
</script>
