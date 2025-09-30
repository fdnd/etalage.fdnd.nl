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
	<a href="/">
		<img src="https://logo.fdnd.nl/fdnd-rect/name-etalage/" alt="FDND etalage">
	</a>
</header>

<main>
	<div>
		<h1><span>FDND</span> Etalage</h1>

		<p>Bij FDND geloven we in vakmanschap en samenwerking. In onze etalage tonen
		we met trots een selectie van bijzondere projecten waar studenten van
		verschillende opleidingen met passie en toewijding aan hebben gewerkt. Deze
		projecten zijn niet alleen het resultaat van hard werk, maar ook van
		discipline-overstijgende kennisdeling.</p>
	</div>

	{@render children?.()}
</main>

<footer>
	<img src="https://logo.fdnd.nl/payoff" alt="Creating Tomorrow">
</footer>

<style>
	h1 {
		margin-left: -.1rem;
		margin-bottom: var(--fdnd-size-gap);
		font-size: var(--fdnd-font-xlarge);
  	letter-spacing: -0.05em;
		line-height: 1;
		span {
			display: block;
		}
	}
	header img {
		height: 3rem;
	}

	main {
		display: grid;
		/* grid-template-columns: 1fr 1fr; */
		gap: var(--fdnd-size-gap);
	}

</style>