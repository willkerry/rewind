<script context="module">
	export const prerender = true;
</script>

<script>
	import { sendSpeed } from '$lib/socket.js';
	import TortoiseFill from 'framework7-icons/svelte/svelte/TortoiseFill.svelte';
	import HareFill from 'framework7-icons/svelte/svelte/HareFill.svelte';
	import PlayFill from 'framework7-icons/svelte/svelte/PlayFill.svelte';

	let speed = 0;
	$: sendSpeed(speed);
</script>

<form on:submit|preventDefault class="flex gap-1">
	<label for="speed-controller-button-group"> Speed </label>
	<div id="speed-controller-button-group" class="speed-control-group">
		<button
			class="slow"
			aria-label="Slow"
			on:click={() => (speed = -1)}
			disabled={speed === -1}
			aria-selected={speed === -1}
			title="Slow down"
		>
			<TortoiseFill /></button
		>
		<button
			class="normal"
			aria-label="Normal"
			on:click={() => (speed = 0)}
			disabled={speed === 0}
			aria-selected={speed === 0}
			title="All good"><PlayFill /></button
		>
		<button
			class="fast"
			aria-label="Fast"
			on:click={() => (speed = 1)}
			disabled={speed === 1}
			aria-selected={speed === 1}
			title="Speed up"><HareFill /></button
		>
	</div>
</form>

<style>
	form {
		@apply flex items-center gap-2;
	}
	label {
		@apply text-sm font-semibold text-gray-600;
	}
	.speed-control-group {
		@apply flex;
	}

	button {
		@apply rounded-none;
	}

	button:focus {
		@apply ring-inset;
	}

	.slow {
		@apply rounded-l border-r-0;
	}

	.fast {
		@apply rounded-r border-l-0;
	}

	/*
	button {
		@apply relative float-left border-r-0 rounded-none;
	}

	button:first-child {
		@apply rounded-l;
	}

	button:last-child {
		@apply rounded-r;
	} */
</style>
