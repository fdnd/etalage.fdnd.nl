<script>
	import '$lib/assets/global.css'
	import {HvaLogo} from '$lib';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<HvaLogo />
	<img src="https://logo.fdnd.nl/fdnd-rect/name-etalage/" alt="FDND etalage">
</header>

<main>
{@render children?.()}
</main>

<footer>
	<img src="https://logo.fdnd.nl/payoff" alt="Creating Tomorrow">
</footer>

<style>
	header img {
		height: 3rem;
	}
</style>