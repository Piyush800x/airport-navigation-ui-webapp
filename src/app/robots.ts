export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    sitemap: 'https://skyway.piyushpaul.com/sitemap.xml',
  }
}