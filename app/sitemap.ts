import { getPosts } from './thoughts/utils';

export const baseUrl = 'https://jankidesai.com';

export default async function sitemap() {
  const blogs = getPosts().map((post) => ({
    url: `${baseUrl}/thoughts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', 'blog', 'projects', 'about', 'uses', 'work'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
