<script context="module">
	export const prerender = true;
</script>

<script>
	import QuestionList from '$lib/QuestionList.svelte';
	import { sendQuestion, sendSpeed } from '$lib/socket.js';
	import { TortoiseFill, HareFill, PlayFill } from 'framework7-icons/svelte';

	// Debugging function – this shouldn't make it to production (makes a fake sentence for the demo)
	function makeNonsenseQuestion() {
		let result = [];
		const words = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'];
		// Make a random sentence length, n
		const n = Math.floor(Math.random() * 50) + 1;
		// Make a random array of n words
		for (let i = 0; i < n; i++) {
			result.push(words[Math.floor(Math.random() * words.length)]);
		}
		// Capitalise the first letter
		result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1);
		// Join to a string and append a question mark
		return result.join(' ').concat('?');
	}

	let questionString = '';
	let speed = 0;

	$: sendSpeed(speed);

	/**
	 * @param {{ preventDefault: () => void; }} e
	 */
	function handleQuestion(e) {
		e.preventDefault();
		if (!questionString.trim()) return;
		sendQuestion(questionString);
		setTimeout(() => {}, 1000);
		questionString = '';
	}
</script>

<svelte:head>
	<title>Rewind</title>
	<meta name="description" content="" />
</svelte:head>

<section>
	<QuestionList />

	<div class="input-group">
		<div class="gng">
			<button class="slow" aria-label="Slow" on:click={() => (speed = -1)} disabled={speed === -1}
				><TortoiseFill /></button
			>
			<button class="normal" aria-label="Normal" on:click={() => (speed = 0)} disabled={speed === 0}
				><PlayFill /></button
			>
			<button class="fast" aria-label="Fast" on:click={() => (speed = 1)} disabled={speed === 1}
				><HareFill /></button
			>

			<!-- Some testing/debugging controls -->
			<div class="debug">Debug:</div>
			<button class="debug" on:click={() => (questionString = makeNonsenseQuestion())}
				>Random</button
			>
			<div class="debug">
				{`Speed: ${speed}`}
			</div>
		</div>
		<form on:submit|preventDefault={handleQuestion}>
			<div class="question">
				<input bind:value={questionString} class="input" autocomplete="off" />
				<button type="submit" disabled={!questionString.trim()}>Ask</button>
			</div>
		</form>
	</div>
</section>

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

	.input-group {
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
	.gng {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.question {
		display: flex;
		height: 3rem;
	}

	.slow,
	.fast,
	.normal {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
	}

	.slow {
		background-color: var(--red);
	}

	.fast {
		background-color: var(--green);
	}

	.debug {
		padding: 0.17rem 0.1rem;
		font-size: 0.5rem;
	}
</style>
