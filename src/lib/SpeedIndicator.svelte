<script>
	import { speeds } from './../speedStore.js';

    let negative = false;
	let percentWidth = 0;

    speeds.subscribe(speed => {
        negative = speed < 0;
        percentWidth = Math.round(Math.abs(speed) * 100);
    });
</script>

<dic
	class="border-b grid w-full grid-cols-2 justify-items-stretch bg-orange-100 text-white px-4 py-1"
>
	<div class="flex justify-end items-center">
		{#if negative}
			<div
				class="rounded-l h-2 bg-gradient-to-r from-pink-600 transition"
				style={`width: ${percentWidth}%`}
			/>
		{/if}
	</div>
	<div>
		{#if !negative}
			<div
				class="bg-gradient-to-l h-2 rounded-r from-orange-600 transition"
				style={`width: ${percentWidth}%`}
			/>
		{/if}
	</div>
</dic>
