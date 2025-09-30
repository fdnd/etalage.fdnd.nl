<script>
	import '$lib/assets/global.css'
	import {HvaLogo, HvaPayoff} from '$lib';
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
	<HvaPayoff />
</footer>

<style>
	h1 {
		margin: var(--fdnd-size-gap) 0;
		margin-left: -.08em;
		font-size: var(--fdnd-font-xlarge);
  	letter-spacing: -0.05em;
		line-height: 1;
	}
	header img {
		height: 3rem;
	}
	main {
		container-type: inline-size;
	}
	div {
		margin-bottom: var(--fdnd-size-gap);
		p {
			max-width: 30em;
		}
	}
	@container (width > 30em) {
		div {
			--fdnd-size-cutout: min(calc(100% - var(--fdnd-size-padding) - var(--fdnd-size-gap) - 31rem), 50%);
		}
		div::before,
		div::after {
			position: absolute;
			content: '';
			top: 0;
		}
		div::before {
			right: 0;
			width: var(--fdnd-size-cutout);
			height: 14rem;
			background: var(--fdnd-color-base);
			border-bottom-left-radius: var(--fdnd-size-radius);
		}
		div::after {
			right: var(--fdnd-size-cutout);
			width: calc(var(--fdnd-size-radius)*2);
			aspect-ratio: 1/1;
			border-top-right-radius: var(--fdnd-size-radius);
			box-shadow: calc(var(--fdnd-size-radius)/3) calc(-1 * var(--fdnd-size-radius)/3) 0 0 var(--fdnd-color-base); 
		}
	}
	footer {
		padding-top: calc(var(--fdnd-size-gap)*4);
	}
</style>