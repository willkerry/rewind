<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<script>
	import { session } from '$app/stores';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<main class="p-4 prose mx-auto pb-12">
	<h1>Can the perks of remote learning be usefully implemented in the classroom?</h1>
	<p>On this prototype:</p>
	<ul>
		<li>
			To make for easier for evaluation, there’s only one active connection socket at the moment.
			All concurrent users, regardless of connection number, share the same session.
		</li>
		<li>Bad behaviour (like upvoting infinitely) is permitted for easier demonstration.</li>
		<li>
			This is a <a href="https://svelte.dev">Svelte</a> app, ‘compiled’ to browser Javascript and
			styled with <a href="https://tailwindcss.com">Tailwind CSS</a>. The backend runs on Node.js.
		</li>
	</ul>
</main>

<style>
	main {
		margin-top: 5em;
	}
</style>
