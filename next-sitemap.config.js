// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
