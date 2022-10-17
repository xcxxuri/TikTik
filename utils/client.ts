import sanityClient from '@sanity/client';
//te
export const client = sanityClient({
  projectId: 'fz9m4anh',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
