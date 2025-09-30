<script>
  import { PUBLIC_DIRECTUS_URL } from '$env/static/public'
  import Card from '$lib/components/Card.svelte'
  
  let { data } = $props();
  const showcases = data.showcase
  
</script>

<h2>Case studies FDND</h2>
<p>Bij FDND werken we doorlopen en langdurig aan projecten. Hier staan een aantal case studies van deze projecten.</p>

{#each showcases as showcase}
  <Card {showcase} />
{/each}


