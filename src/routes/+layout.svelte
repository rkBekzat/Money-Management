<script>
	import Header from './Header.svelte';
	// import Footer from "./Footer.svelte";
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<!--    <Footer />-->
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
