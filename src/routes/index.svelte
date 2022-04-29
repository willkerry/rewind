<script context="module">
	export const prerender = true;
</script>

<script>
	import Controls from '$lib/Controls.svelte';
	import QuestionList from '$lib/QuestionList.svelte';
</script>

<svelte:head>
	<title>Rewind</title>
	<meta name="description" content="" />
</svelte:head>

<section>
	<QuestionList />
	<Controls />
</section>
