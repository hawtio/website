import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import 'bootstrap/dist/css/bootstrap.min.css'

import favicon from '../../static/images/logo-128px.png'

const Layout = ({ children, data }) => {
  const { title, description, keywords } = data.site.siteMetadata
  return (
    <div>
      <Helmet
        title={`${title} - ${description}`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
      <Header siteTitle={title} />
      <div style={{ marginTop: 60 }}>
        {children()}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
