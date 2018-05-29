import React from 'react'
import {
  Grid,
  Row,
  Col,
  Nav,
  NavItem,
  PageHeader
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { withPrefix } from 'gatsby-link'

import '../css/docs.css'

const DocsTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Grid>
      <Row>
        <Col xsHidden smHidden md={2} style={{ position: 'fixed' }}>
          <h5 style={{ marginTop: 50, marginBottom: 30 }}>
            <Link to="/docs/">Index</Link>
          </h5>
          <h5>Using Hawtio</h5>
          <Nav stacked>
            <NavItem eventKey={1} href={withPrefix('/docs/get-started/')}>
              Get Started
            </NavItem>
            <NavItem eventKey={2} href={withPrefix('/docs/configuration/')}>
              Configuration
            </NavItem>
            <NavItem eventKey={3} href={withPrefix('/docs/plugins/')}>
              Plugins
            </NavItem>
            <NavItem eventKey={4} href={withPrefix('/docs/maven-plugins/')}>
              Maven Plugins
            </NavItem>
            <NavItem eventKey={5} href={withPrefix('/docs/articles/')}>
              Articles
            </NavItem>
          </Nav>
          <h5>General Docs</h5>
          <Nav stacked>
            <NavItem eventKey={6} href={withPrefix('/docs/faq/')}>
              FAQ
            </NavItem>
            <NavItem eventKey={7} href={withPrefix('/docs/changes/')}>
              Change Log
            </NavItem>
            <NavItem eventKey={8} href={withPrefix('/docs/contributing/')}>
              Contributing
            </NavItem>
          </Nav>
        </Col>
        <Col md={10} mdOffset={2}>
          <PageHeader>
            <h1>{frontmatter.title}</h1>
          </PageHeader>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Col>
      </Row>
    </Grid>
  )
}

export default DocsTemplate

export const query = graphql`
  query DocsTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
