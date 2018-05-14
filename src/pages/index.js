import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.description}</h1>
    <div style={{ textAlign: 'center' }}>
      <a href="/articles/">View Demos</a>
      &nbsp;&nbsp;&nbsp;
      <a href="/get-started/">Get Started Now</a>
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
