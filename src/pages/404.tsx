import { graphql } from 'gatsby'
import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import * as Icon from 'react-bootstrap-icons'

const NotFoundPage = () => (
  <Layout>
    <Container style={{ marginTop: '3rem' }}>
      <h1>
        <Icon.Robot style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> Page not found
      </h1>
    </Container>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

export { Head } from './index'
