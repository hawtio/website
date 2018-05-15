import React from 'react'
import Link from 'gatsby-link'
import { Jumbotron, Button, PageHeader } from 'react-bootstrap'

const IndexPage = ({ data }) => (
  <Jumbotron style={{
    background: 'black'
  }}>
    <div className="container">
      <img src="/images/hawtio_logo.svg" style={{ height: 120, margin: 0 }} />
      <h2 style={{ maxWidth: '50%', color: 'lightgrey' }}>{data.site.siteMetadata.description}</h2>
      <div style={{ marginTop: '4rem' }}>
        <Button href="/docs/articles/" style={{ marginRight: '1.5rem' }}>View Demos</Button>
        <Button bsStyle="primary" href="/docs/get-started/">Get Started Now</Button>
      </div>
    </div>
  </Jumbotron>
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
