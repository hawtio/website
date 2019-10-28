import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import favicon from '../../static/images/logo-128px.png'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={`${data.site.siteMetadata.title} - ${data.site.siteMetadata.description}`}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        />
        <Header />
        <div style={{ marginTop: 60 }}>
          {children}
        </div>
        <Footer />
      </div>
    )}
  />
)
