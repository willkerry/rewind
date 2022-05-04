<script context="module">
	export const prerender = true;
</script>

<script>
	import { sendQuestion } from '$lib/socket.js';
	import { makeNonsenseQuestion } from '$lib/utils/testing.js';

	let questionString = '';
	function handleQuestion() {
		if (!questionString.trim()) return;
		sendQuestion(questionString);
		setTimeout(() => {}, 1000);
		questionString = '';
	}
</script>

<form on:submit|preventDefault={handleQuestion} class="flex gap-1">
	<input type="text" bind:value={questionString} autocomplete="off" />
	<button disabled={!questionString.trim()}>Ask</button>
	<button on:click|preventDefault={() => (questionString = makeNonsenseQuestion())}>R</button>
</form>
