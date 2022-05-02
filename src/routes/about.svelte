<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<main class="p-4 prose mx-auto">
	<h1>Can the advantages of pandemic-adapted learning be applied to the classroom?</h1>
<!-- 
	<p>
		<span class="font-black uppercase text-sm tracking-wde">Abstract:</span> Rewind is an experimental
		audience response system (ARS). It’s intended to be used in a face-to-face setting, and intended
		to introduce the minimum possible interaction friction.
	</p>

	<h2>Why?</h2>
	<p>
		...because it’s my MSc final project. This is a functional proof of concept, but it’s not
		intended to get any serious use. I also do <a href="https://willkerry.com">useful paid work</a> with
		companies and things.
	</p>
	<h2>Why might we want to find new ways to engage students in lectures?</h2>
	<p>
		I posit that, after a face-to-face teaching hiatus, students have become more comfortable in a
		virtual teaching setting than in a normal one. One way to help re-socialise everyone is to bring
		the controls of the video lecture into the classroom.
	</p>
	<ul>
		<li>Students seem to prefer typing questions and answers to speaking them aloud.</li>
		<li>
			Students are more comfortable to risk answering a question incorrectly when not visible to
			their peers.
		</li>
		<li>
			Pre-recorded lectures have some clear benefits:
			<ul>
				<li>They allow lecturers to curate their performances.</li>
				<li>
					They allow students to manipulate time: repeating, slowing and speeding-up playback.
				</li>
			</ul>
		</li>
	</ul>

	<h2>What does this jobbie do then?</h2>
	<p>
		All users are equal. They’re prompted for a connection code (a Javascript <code>number</code>)
		on each load. Every possible code is valid. Any user can initiate a session. A useful session is
		initiated at code <code>n</code> by a lecturere and accessed by students, with whom the lecturer
		has shared code <code>n</code>.
	</p>

	<h2>How?</h2>

	<p>
		A lot of ARSes already exist, and most of them are more powerful than <strong>Rewind</strong>.
		Rewind is designed with one specific goal:
	</p>

	<p>I proceed to render those 2, maybe 3, interactions in the browser.</p>

	<pre><code>npm init svelte</code></pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p> -->
</main>

<style>
	main {
		margin-top: 5em;
	}

	p {
		@apply mb-6;
	}
</style>
