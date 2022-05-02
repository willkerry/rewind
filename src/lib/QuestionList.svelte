<script context="module">
	// export const prerender = true;
</script>

<script>
	import { questions, removeQuestion } from '../questionsStore.js';
	import { sendQuestion } from '$lib/socket.js';
	import SocketNumber from '$lib/SocketNumber.svelte';
	import TrayFill from 'framework7-icons/svelte/svelte/TrayFill.svelte';
	import EyeSlashFill from 'framework7-icons/svelte/svelte/EyeSlashFill.svelte';
	import HandThumbsupFill from 'framework7-icons/svelte/svelte/HandThumbsupFill.svelte';
</script>

{#if $questions.length > 0}
	<ul class="overflow-scroll flex-1">
		{#each $questions as q, i}
			<li
				class:bg-gray-100={i % 2 === 0}
				class="pl-4 pr-2 py-2 gap-3 flex flex-row items-center justify-between"
			>
				<div>
					{#if q.count > 1}
						<span class="text-orange-500 text-sm font-black">{q.count}×</span>
					{/if}
					{q.text}
					<time class="text-gray-600  slashed-zero"
						>@ {new Date(q.updated).toLocaleTimeString([], {
							hour: '2-digit',
							minute: '2-digit',
							hour12: false
						})}</time
					>
				</div>
				<div class="flex flex-row items-center">
					<button class="text-gray-500 " on:click={() => removeQuestion(i)}><EyeSlashFill /></button
					>
					<button
						class="text-orange-600 hover:!bg-orange-600 hover:text-white hover:border-orange-800"
						on:click={() => sendQuestion(q.text)}><HandThumbsupFill /></button
					>
				</div>
			</li>
		{/each}
	</ul>
{:else}
	<div class="empty-state flex-1 flex flex-col items-center justify-center m-4 text-center">
		<TrayFill class="h-8 w-8 text-gray-500 mb-2" />
		<h2 class="font-medium text-2xl mb-4">Ask a question!</h2>
		<p class="max-w-md text-gray-700">
			You’ll only see questions that are asked while you’re connected to <SocketNumber />.
		</p>
	</div>
{/if}

<style>
	button {
		@apply p-1 m-1 inline-flex items-center justify-center;
	}
</style>
