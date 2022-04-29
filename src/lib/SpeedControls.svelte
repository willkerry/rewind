<script context="module">
	export const prerender = true;
</script>

<script>
	import { sendSpeed } from '$lib/socket.js';
	import { TortoiseFill, HareFill, PlayFill } from 'framework7-icons/svelte';

	let speed = 0;
	$: sendSpeed(speed);
</script>

<div>
	<button class="slow" aria-label="Slow" on:click={() => (speed = -1)} disabled={speed === -1}
		><TortoiseFill /></button
	>
	<button class="normal" aria-label="Normal" on:click={() => (speed = 0)} disabled={speed === 0}
		><PlayFill /></button
	>
	<button class="fast" aria-label="Fast" on:click={() => (speed = 1)} disabled={speed === 1}
		><HareFill /></button
	>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		margin: 0.25rem;
	}

	.slow {
		background-color: var(--red);
	}

	.fast {
		background-color: var(--green);
	}
</style>
