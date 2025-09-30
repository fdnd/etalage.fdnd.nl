<script>
  import Casestudy from '$lib/components/Casestudy.svelte';
  const { data } = $props()
  const showcase = data.showcase[0]
</script>


<Casestudy {showcase} />
