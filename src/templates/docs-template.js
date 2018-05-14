import React from 'react'

const DocsTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <div>
      <h1>{frontmatter.title}</h1>
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
