import React from 'react'
import {
  Grid,
  Row,
  Col,
  Nav,
  NavItem as RBNavItem,
  PageHeader
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { withPrefix } from 'gatsby-link'

import '../css/docs.css'

const NavItem = props =>
  <RBNavItem href={props.href} style={{ margin: -5 }}>
    {props.children}
  </RBNavItem>

const DocsTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Grid>
      <Row>
        <Col xsHidden smHidden md={2} style={{ position: 'fixed' }}>
          <h5 style={{ marginTop: 50, marginBottom: 30 }}>
            <Link to={withPrefix('/docs/')}>Index</Link>
          </h5>
          <h5>Using Hawtio</h5>
          <Nav stacked>
            <NavItem href={withPrefix('/docs/get-started/')}>
              Get Started
            </NavItem>
            <NavItem href={withPrefix('/docs/configuration/')}>
              Configuration
            </NavItem>
            <NavItem href={withPrefix('/docs/plugins/')}>
              Plugins
            </NavItem>
            <NavItem href={withPrefix('/docs/maven-plugins/')}>
              Maven Plugins
            </NavItem>
            <NavItem href={withPrefix('/docs/articles/')}>
              Articles
            </NavItem>
          </Nav>
          <h5>General Docs</h5>
          <Nav stacked>
            <NavItem href={withPrefix('/docs/faq/')}>
              FAQ
            </NavItem>
            <NavItem href='https://github.com/hawtio/hawtio/blob/master/CHANGES.md'>
              Change Log
            </NavItem>
            <NavItem href={withPrefix('/docs/contributing/')}>
              Contributing
            </NavItem>
          </Nav>
          <h5>Developers</h5>
          <Nav stacked>
            <NavItem href='https://github.com/hawtio/hawtio/blob/master/DEVELOPERS.md'>
              Developer Guide
            </NavItem>
            <NavItem href='https://github.com/hawtio/hawtio/blob/master/BUILDING.md'>
              Building
            </NavItem>
            <NavItem href={withPrefix('/docs/how-plugins-work/')}>
              How Plugins Work
            </NavItem>
            <NavItem href={withPrefix('/docs/how-to-make-ui-stuff/')}>
              UI Stuff
            </NavItem>
          </Nav>
          <h5>Committers</h5>
          <Nav stacked>
            <NavItem href={withPrefix('/docs/coding-conventions/')}>
              Coding Conventions
            </NavItem>
            <NavItem href={withPrefix('/docs/release-guide/')}>
              Release Guide
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
