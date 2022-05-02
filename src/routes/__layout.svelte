<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<main class="min-h-screen max-h-screen flex flex-col">
	<Header />
	<slot />
</main>

<style>
</style>
