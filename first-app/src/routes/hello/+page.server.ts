import type { PageServerLoad } from './$types';

export const load = (async () => {

  // This code gets excuted on the server side when the user
  // navigates to the route, the result will be automatically
  // accessible in the page component as `data` prop.

  // You can use this to load data from a database or an API
  // Access environment variables
  // Acces files on the filesystem, etc.

  return {
    title: 'My data',
    text: 'This is my data'
  };
}) satisfies PageServerLoad;
