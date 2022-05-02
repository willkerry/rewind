<script context="module">
	export const prerender = true;
</script>

<script>
	import AskQuestion from './AskQuestion.svelte';
	import SpeedControls from './SpeedControls.svelte';
</script>

<div class="border-t flex flex-col gap-2 p-2  bg-white">
	<SpeedControls />
	<AskQuestion />
</div>
