import React from 'react'
import Link from 'gatsby-link'
import { Jumbotron } from 'react-bootstrap'
import { Button } from 'patternfly-react'

const IndexPage = ({ data }) => (
  <div>
    <Jumbotron>
      <h2>{data.site.siteMetadata.description}</h2>
      <p>
        <Button href="/docs/articles/">View Demos</Button>
        <Button bsStyle="primary" href="/docs/get-started/">Get Started Now</Button>
      </p>
    </Jumbotron>
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
