<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<main class="p-4 prose mx-auto">
	<h1>Can the advantages of pandemic-adapted learning be applied to the classroom?</h1>
</main>

<style>
	main {
		margin-top: 5em;
	}
</style>
