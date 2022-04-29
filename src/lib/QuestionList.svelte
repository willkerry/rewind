<script context="module">
	// export const prerender = true;
</script>

<script>
	import { questions, removeQuestion } from '../questionsStore.js';
	import { TrashFill, HandThumbsupFill } from 'framework7-icons/svelte';
	import { sendQuestion } from '$lib/socket.js';
</script>

{#if $questions.length > 0}
	<ul>
		{#each $questions as q, i}
			<li style="background-color: {i % 2 === 0 && 'var(--grey)'}">
				<div>
					{#if q.count > 1}
						<span class="count">{q.count}×</span>
					{/if}
					{q.text}
					<time class="count"
						>@ {new Date(q.updated).toLocaleTimeString([], {
							hour: '2-digit',
							minute: '2-digit',
							hour12: false
						})}</time
					>
				</div>
				<div class="controls">
					<button class="icon" on:click={() => removeQuestion(i)}><TrashFill /></button>

					<!-- This feature’s 100% a prototpye – need to limit to one vote per user. -->
					<button class="icon" on:click={() => sendQuestion(q.text)}><HandThumbsupFill /></button>
				</div>
			</li>
		{/each}
	</ul>
{:else}
	<div class="empty-state">Ask a question!</div>
{/if}

<style>
	.icon {
		padding: 0.2rem;
		margin: 0.1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	ul > li {
		padding: 0.5rem 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.controls {
		padding-left: var(--sm-pad);
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.empty-state {
		padding: 1rem;
		height: 33vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		color: var(--disabled);
	}
	.count {
		font-variant-caps: all-small-caps;
		color: var(--secondary);
	}
</style>
