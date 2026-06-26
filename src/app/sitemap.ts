import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://balaji09.netlify.app',
      lastModified: new Date(),
    },
    {
      url: 'https://balaji09.netlify.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://balaji09.netlify.app/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://balaji09.netlify.app/contact',
      lastModified: new Date(),
    },
  ]
}
