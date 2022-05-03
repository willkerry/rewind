<script>
	import SocketNumber from '$lib/SocketNumber.svelte';
	import { page } from '$app/stores';
</script>

<header class="border-b">
	<nav class="p-4">
		<ul class="flex gap-4 items-center">
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/" class="brand">
					<!-- <span class="rw">◀◀</span> -->
					Rewind
				</a>
			</li>
			<SocketNumber />
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<!-- <li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li> -->
		</ul>
	</nav>
</header>

<style>
	.brand {
		@apply font-black uppercase text-transparent tracking-wide bg-clip-text bg-gradient-to-br from-pink-700 to-orange-400;
	}
	.rw {
		@apply tracking-[-0.3em] mr-2;
	}
</style>
