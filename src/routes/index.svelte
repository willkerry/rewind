<script context="module">
	export const prerender = true;
</script>

<script>
	import EnterConnectionCode from '$lib/EnterConnectionCode.svelte';
	import Controls from '$lib/Controls.svelte';
	import QuestionList from '$lib/QuestionList.svelte';
	import { socketNumber } from '../socketStore';
</script>

<svelte:head>
	<title>Rewind</title>
	<meta name="description" content="" />
</svelte:head>

{#if $socketNumber <= 0}
	<EnterConnectionCode />
{:else}
	<QuestionList />
	<Controls />
{/if}
