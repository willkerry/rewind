<script context="module">
	export const prerender = true;
</script>

<script>
	import { setSocketNumber } from '../socketStore.js';
	/**
	 * @type {string}
	 */
	let localSocket;

	function handleSubmit() {
		if (!localSocket) return;
		setSocketNumber(localSocket);
	}
	function randomEightDigitNumberString() {
		const num = Math.floor(Math.random() * 99999999) + 10000000;
		const str = num.toString();
		return str;
	}
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="p-4 gap-2 justify-center max-w-lg grid grid-cols-2 m-auto"
>
	<label for="socket-code" class="col-span-2">Enter a connection code</label>
	<input
		id="socket-code"
		step="1"
		min="1000"
		type="number"
		bind:value={localSocket}
		class="tabular-nums slashed-zero col-span-2"
	/>
	<button type="submit">Start</button><button
		on:click|preventDefault={() => (localSocket = randomEightDigitNumberString())}>Randomise</button
	>
	<aside
		class="bg-gray-100 px-4 py-3  rounded-md border-l-2 text-sm text-gray-900 mt-6 mb-20 border-gray-400 col-span-2"
	>
		<strong>What’s this?</strong> To start a session, pick a numeric connection code and share it with
		your attendees. You can reuse the same code for subsequent sessions.
	</aside>
</form>
