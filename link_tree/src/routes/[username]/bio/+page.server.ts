import { adminAuth, adminDB } from '$lib/server/admin'
import { error, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals, params }) => {
  const uid = locals.userID

  if (!uid) {
    throw redirect(301, '/login')
  }

  const userDoc = await adminDB.collection('users').doc(uid).get()
  const userData = userDoc.data()

  if (params.username !== userData?.username) {
    throw error(404, 'Not found')
  }

  return {
    bio: userData?.bio,
  }
}) satisfies PageServerLoad
