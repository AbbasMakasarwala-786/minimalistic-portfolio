import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://github.com/AbbasMakasarwala-786',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: "mailto:abbasmakasarwala1@gmail.com",
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: "https://www.linkedin.com/in/abbas-makasarwala",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: "https://drive.google.com/file/d/1LIRuPn9X38nfr6_v1v2XjQc-eoXkZ18P/view?usp=drivesdk",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}