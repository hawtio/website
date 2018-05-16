module.exports = {
  siteMetadata: {
    title: 'Hawtio',
    description: 'A modular web console for managing your JVM stuff and stay cool!',
    keywords: 'hawtio, jvm, jmx, java, monitoring, management',
    siteUrl: 'http://hawt.io',
    issueUrl: 'https://github.com/hawtio/hawtio/issues',
    forumUrl: 'https://groups.google.com/forum/#!forum/hawtio',
    repositoryUrl: 'http://github.com/hawtio/hawtio'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/docs`,
        name: 'markdown-pages'
      }
    },
    'gatsby-transformer-remark'
  ],
}
