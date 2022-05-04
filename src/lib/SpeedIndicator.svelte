<script>
	import { speeds } from './../speedStore.js';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import TortoiseFill from 'framework7-icons/svelte/svelte/TortoiseFill.svelte';
	import HareFill from 'framework7-icons/svelte/svelte/HareFill.svelte';

	let negative = true;
	let percentWidth = 0;

	let left = tweened(0, {
		delay: 1000,
		duration: 2000,
		easing: cubicInOut
	});
	let right = tweened(0, {
		delay: 1000,
		duration: 2000,
		easing: cubicInOut
	});

	speeds.subscribe((speed) => {
		negative = speed < 0;
		percentWidth = Math.round(Math.abs(speed) * 100);

		if (negative) {
			left.set(percentWidth);
			$right && right.set(0);
		} else {
			right.set(percentWidth);
			$right && right.set(percentWidth);
		}
	});
</script>

<div
	class="border-b grid w-full grid-cols-2 justify-items-stretch bg-orange-100 text-white px-4 py-1"
>
	<div class="flex justify-end items-center">
		{#if negative}<TortoiseFill class="text-pink-600 mr-1" />{/if}
		<div
			class="rounded-l h-2 bg-gradient-to-r from-pink-600 transition"
			style={`width: ${$left}%`}
		/>
	</div>

	<div class="flex justify-start items-center">
		<div
			class="bg-gradient-to-l h-2 rounded-r from-orange-600 transition"
			style={`width: ${$right}%`}
		/>
		{#if !negative}<HareFill class="text-orange-600 ml-1" />{/if}
	</div>
</div>

<div />
