import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.description}</h1>
    <div style={{ textAlign: 'center' }}>
      <Link to="/docs/articles/">View Demos</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/docs/get-started/">Get Started Now</Link>
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
