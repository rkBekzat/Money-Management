<script>
	import Header from './Header.svelte';
	import Footer from "./Footer.svelte";
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.app {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	main {
		background-color: #121212;
		color: white;
		/*TODO Make main min-height of screen size*!*/
	}
</style>
