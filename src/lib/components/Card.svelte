<script>
  import Poster from "./Poster.svelte";
  const { showcase } = $props()
</script>

<article>
  <Poster poster={showcase.poster} name={showcase.name} />
  
  <h3>{showcase.name}</h3>
  <p>{showcase.intro}</p>

  <a href="{showcase.uuid}"><span>Meer informatie over {showcase.name}</span></a>
  
  {#if showcase.live_url}
    <a class="live_url" href="{showcase.live_url}"><span>Bekijk de live-site</span></a>  
  {/if}
  
</article>

<style>
  h3 {
    font-size: var(--fdnd-font-medium);
    margin-left: -.1em;
  }
</style>