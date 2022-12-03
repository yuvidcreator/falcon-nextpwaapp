/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    changefreq: 'daily',
    priority: 0.7,
    exclude: ["/404"],
    generateRobotsTxt: true, // (optional)
    // ...other options
    robotsTxtOptions: {
        policies: [
            {
            userAgent: "*",
            disallow: ["/404"],
            },
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            `${siteUrl}/sitemap.xml`,
            // `${siteUrl}/server-sitemap.xml`,
        ],
    },
}