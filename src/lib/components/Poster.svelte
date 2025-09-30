<script>
  import { PUBLIC_DIRECTUS_URL } from '$env/static/public'
  const { poster, name } = $props()
  // TODO: SRCSET & SIZES
</script>

<picture>
  <source
    type="image/avif"
    srcset="{PUBLIC_DIRECTUS_URL}/assets/{poster.id}?fit=cover&width={poster.width}&height={poster.height}&format=avif"
  />
  <source
    type="image/webp"
    srcset="{PUBLIC_DIRECTUS_URL}/assets/{poster.id}?fit=cover&width={poster.width}&height={poster.height}&format=webp"
  />
  <img
    src="{PUBLIC_DIRECTUS_URL}/assets/{poster.id}?fit=cover&width={poster.width}&height={poster.height}&format=png"
    alt="Poster voor {name}"
  />
</picture>

<style>
</style>