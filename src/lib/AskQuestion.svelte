<script context="module">
	export const prerender = true;
</script>

<script>
	import { sendQuestion } from '$lib/socket.js';
	import { makeNonsenseQuestion } from '$lib/testing.js';

	let questionString = '';
	function handleQuestion() {
		if (!questionString.trim()) return;
		sendQuestion(questionString);
		setTimeout(() => {}, 1000);
		questionString = '';
	}
</script>

<form on:submit|preventDefault={handleQuestion}>
	<input bind:value={questionString} class="input" autocomplete="off" />
	<button type="submit" disabled={!questionString.trim()}>Ask</button>
	<button class="debug" on:click={() => (questionString = makeNonsenseQuestion())}>R</button>
</form>

<style>
	input {
		padding: 0 1rem;
		flex-grow: 1;
		margin: 0.25rem;
	}
	button {
		padding: 0 1rem;
		margin: 0.25rem;
	}

	form {
		display: flex;
		height: 3rem;
	}

	.debug {
		padding: 0.17rem 0.1rem;
		font-weight: 700;
		background-color: var(--black);
	}
</style>
