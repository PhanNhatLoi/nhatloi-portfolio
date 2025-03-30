/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || `http://localhost:${process.env.PORT}/`,
  generateRobotsTxt: true, // (optional)
  // ...other options
};
