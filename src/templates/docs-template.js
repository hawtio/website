import React from 'react'
import {
  Grid,
  Row,
  Col,
  Nav,
  NavItem,
  PageHeader
} from 'react-bootstrap';

const DocsTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Grid>
      <Row>
        <Col md={3}>
          <h4 style={{ marginTop: 50 }}>Using Hawtio</h4>
          <Nav bsStyle="pills" stacked>
            <NavItem eventKey={1} href="/docs/get-started/">
              Get Started
            </NavItem>
            <NavItem eventKey={2} href="/docs/configuration/">
              Configuration
            </NavItem>
            <NavItem eventKey={3} href="/docs/plugins/">
              Plugins
            </NavItem>
            <NavItem eventKey={4} href="/docs/maven-plugins/">
              Maven Plugins
            </NavItem>
            <NavItem eventKey={5} href="/docs/articles/">
              Articles
            </NavItem>
          </Nav>
          <h4>General Docs</h4>
          <Nav bsStyle="pills" stacked>
            <NavItem eventKey={1} href="/docs/faq/">
              FAQ
            </NavItem>
            <NavItem eventKey={2} href="/docs/changes/">
              Change Log
            </NavItem>
            <NavItem eventKey={3} href="/docs/contributing/">
              Contributing
            </NavItem>
          </Nav>
        </Col>
        <Col md={9}>
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
