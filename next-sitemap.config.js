// // next-sitemap.config.js
// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
//   generateRobotsTxt: true,
//   changefreq: 'monthly',
//   priority: 0.8,
//   sitemapSize: 5000,
//   exclude: ['/admin/*'],
//   robotsTxtOptions: {
//     policies: [
//       { userAgent: '*', allow: '/' },
//     ],
//   },
// };



/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Update this to your live Rational Equity domain
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rationalequity.com', 
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ['/admin/*'], // Good practice to keep admin hidden
  robotsTxtOptions: {
    policies: [
      { 
        userAgent: '*', 
        allow: '/',
        // You can add a Disallow rule here if you have private folders
      },
    ],
    // This tells Google exactly where the sitemap is located
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://rationalequity.com'}/sitemap.xml`,
    ],
  },
};