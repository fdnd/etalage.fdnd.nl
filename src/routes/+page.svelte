<script>
  import { PUBLIC_DIRECTUS_URL } from '$env/static/public'
  import Card from '$lib/components/Card.svelte'
  
  let { data } = $props();
  const showcases = data.showcase
</script>

<div>
  <h2>Case studies</h2>

  <p>Elke case-study in onze etalage vertelt een uniek verhaal: over uitdagingen
  die werden omgezet in kansen, over samenwerking die leidde tot verrassende
  inzichten, en over resultaten waar we als opleiding trots op zijn. Hier zie je
  wat er mogelijk is als studenten talenten bundelen en met een kritische,
  nieuwsgierige blik de wereld tegemoet treden.</p>

  <p>Laat je inspireren door de verhalen achter de projecten en ontdek hoe onze
  studenten stap voor stap, samen de toekomst vormgeven.</p>
</div>

{#each showcases as showcase}
  <Card {showcase} />
{/each}

<style>

</style>

