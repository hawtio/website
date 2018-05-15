import React from 'react'
import { PageHeader } from 'react-bootstrap';

const DocsTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <div className="container">
      <PageHeader>
        <h1>{frontmatter.title}</h1>
      </PageHeader>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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
