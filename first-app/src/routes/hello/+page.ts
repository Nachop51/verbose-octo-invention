import type { PageLoad } from './$types'

// Control whether or not this page is server-side rendered.
// export const ssr = true;

// Control whether or not this page is prerendered.
// export const prerender = true;

// Control whether or not this page is hydrated
// export const csr = true;

export const load = (async () => {

  const { title, text } = await fetch('some api').then(res => res.json())

  // This part of the code, runs on both client and server side
  // so you won't be able to access .env variables here or files

  // * This ideal for client side data fetching

  // This is the data that will be passed to the page component as props

  return {
    title, text
  }
}) satisfies PageLoad
