import { error, json } from '@sveltejs/kit'
import type { RequestEvent, RequestHandler } from './$types'

export const GET: RequestHandler = async (e: RequestEvent) => {

  // console.log(e.cookies);
  // console.log(e.params);
  // console.log(e.request.body);
  // console.log(e.request.headers);

  // Fetch from backend inherits client headers
  // e.fetch('https://google.com').then(res => res.text()).then(console.log);

  return new Response()
}

export const POST: RequestHandler = async (e: RequestEvent) => {

  const user = { admin: true }

  if (!user.admin)
    throw error(401, 'Unauthorized')

  return json({ fun: { status: true, message: 'Svelte is fun' } })
}

export const DELETE: RequestHandler = async () => {
  return new Response()
}

export const PUT: RequestHandler = async () => {
  return new Response()
}

export const PATCH: RequestHandler = async () => {
  return new Response()
}