import React from 'react'
import { Link, graphql, withPrefix } from 'gatsby'
import {
  Grid,
  Row,
  Col,
  Nav,
  NavItem as RBNavItem,
  PageHeader
} from 'react-bootstrap'
import Layout from '../components/layout'
import '../css/docs.css'

const NavItem = props =>
  <RBNavItem href={props.href} style={{ margin: -5 }}>
    {props.children}
  </RBNavItem>

const DocsTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
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
              <NavItem href={withPrefix('/docs/keycloak-integration/')}>
                Keycloak
              </NavItem>
            </Nav>
            <h5>Hawtio in Containers</h5>
            <Nav stacked>
            <NavItem href={withPrefix('/docs/create-user/')}>
                Creating Users
              </NavItem>
              <NavItem href={withPrefix('/docs/generate-certificates/')}>
              Generating Certificates
              </NavItem>
            <NavItem href={withPrefix('/docs/rbac/')}>
                RBAC
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
              <NavItem href='https://github.com/hawtio/hawtio/blob/master/RELEASING.md'>
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
    </Layout>
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
