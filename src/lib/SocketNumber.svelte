<script>
	import XmarkCircleFill from 'framework7-icons/svelte/svelte/XmarkCircleFill.svelte';
	import { socketNumber, resetSocketNumber } from '../socketStore.js';
</script>

{#if $socketNumber > 0}
	<span
		class="group cursor-pointer gap-0.5 font-sans inline-flex items-center font-semibold bg-gradient-to-tr from-pink-100 to-yellow-100 rounded-full pl-2 pr-0.5 text-orange-600 tabular-nums before:content-['#'] before:font-bold before:opacity-60"
		on:click|preventDefault={resetSocketNumber}
		title={`Disconnect from #${$socketNumber}`}
		>{$socketNumber}

		<span class="select-none inline-flex group-hover:text-orange-900">
			<XmarkCircleFill class="inline" />
		</span>
	</span>
{/if}
