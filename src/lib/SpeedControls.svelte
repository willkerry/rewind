<script context="module">
	// export const prerender = true;
</script>

<script>
	import { sendSpeed } from '$lib/socket.js';
	import TortoiseFill from 'framework7-icons/svelte/svelte/TortoiseFill.svelte';
	import HareFill from 'framework7-icons/svelte/svelte/HareFill.svelte';
	import PlayFill from 'framework7-icons/svelte/svelte/PlayFill.svelte';
	import { wait } from '$lib/utils/wait.js';

	let disableInputs = false;
	let countdown = 0;

	/**
	 * @param {-1 | 0 | 1} num
	 */
	async function handleSubmit(num) {
		if (disableInputs) return;
		disableInputs = true;
		printCountdown(60);
		sendSpeed(num);
		await wait(60000);
		disableInputs = false;
	}

	/**
	 * @param {number} secs
	 */
	async function printCountdown(secs) {
		countdown = secs;
		await wait(1000);
		if (secs > 0) {
			printCountdown(secs - 1);
		} else {
			countdown = 0;
		}
	}
</script>

<form on:submit|preventDefault class="flex gap-1">
	<label for="speed-controller-button-group"> Speed </label>
	<div id="speed-controller-button-group" class="speed-control-group">
		<button
			class="slow"
			aria-label="Slow"
			on:click={() => handleSubmit(-1)}
			disabled={disableInputs}
			title="Slow down"
		>
			<TortoiseFill /></button
		>
		<button
			class="normal"
			aria-label="Normal"
			on:click={() => handleSubmit(0)}
			disabled={disableInputs}
			title="All good"><PlayFill /></button
		>
		<button
			class="fast"
			aria-label="Fast"
			on:click={() => handleSubmit(1)}
			disabled={disableInputs}
			title="Speed up"><HareFill /></button
		>
	</div>
	<span class="xs font-semibold countdown text-gray-400" hidden={!countdown}>{countdown}</span>
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

	button {
		@apply relative float-left border-r-0 rounded-none;
	}

	button:first-child {
		@apply rounded-l;
	}

	button:not(:last-child) {
		@apply border-l;
	}

	button:last-child {
		@apply rounded-r border-r;
	}
</style>
