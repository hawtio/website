import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Hawtio',
    description: 'A modular web console for managing your Java stuff',
    keywords: 'hawtio, jvm, jmx, java, jolokia, monitoring, management, console',
    siteUrl: 'https://hawt.io',
    issueUrl: 'https://github.com/hawtio/hawtio/issues',
    forumUrl: 'https://groups.google.com/forum/#!forum/hawtio',
    repositoryUrl: 'http://github.com/hawtio/hawtio',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
  ],
}

export default config
