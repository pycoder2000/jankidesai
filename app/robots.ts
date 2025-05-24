import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://jankidesai.com/sitemap.xml`,
    host: `https://jankidesai.com`,
  };
}
