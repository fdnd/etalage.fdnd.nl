<script>
  import Poster from "./Poster.svelte";
  const { showcase } = $props()
</script>

<article>
  <h2>{showcase.name}</h2>

  {#if showcase.live_url}
    <a class="live_url" href="{showcase.live_url}"><span>Bekijk de live-site</span></a>  
  {/if}

  {@html showcase.body}  
</article>

<style>
</style>