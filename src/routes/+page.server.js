import { createDirectus, graphql } from '@directus/sdk'

import { PUBLIC_DIRECTUS_URL } from '$env/static/public'

export async function load() {
  const client = createDirectus(PUBLIC_DIRECTUS_URL).with(graphql())
  let { showcase } = await client.query(`
    query {
      showcase {
        uuid
        date_created
        date_updated
        name
        intro
        body
        poster {
          id
          width
          height
        }
        github_url
        live_url
      }
    }
  `)
  return { showcase }
}
