<template>
	<div
		class="loading flex justify-center items-center fixed top-0 bottom-0 w-full bg-maincolor"
	>
		<div class="text-xl text-center logo max-sm:mb-4">
			challenge <span>me</span>
		</div>
	</div>
</template>
<script setup>
function loading() {
	document.querySelector(".loading").style.display = "none";
	document.body.style.overflow = "auto";
}
onMounted(() => {
	loading();
	window.addEventListener("DOMContentLoaded", () => {
		setTimeout(loading, 1000);
	});
});
</script>
