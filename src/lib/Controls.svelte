<script context="module">
	export const prerender = true;
</script>

<script>
	import AskQuestion from './AskQuestion.svelte';
	import SpeedControls from './SpeedControls.svelte';
</script>

<div class="controls">
	<SpeedControls />
	<AskQuestion />
</div>

<style>
	.controls {
		background: var(--grey);
		padding: 0.25rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		backdrop-filter: blur(10px);
	}
</style>
