const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'src/docs' })
    createNodeField({ node, name: 'slug', value: `/docs${slug}` })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const docsTemplate = path.resolve('src/templates/docs-template.js')
  const query = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return new Promise((resolve, reject) =>
    query.then(result => {
      if (result.errors) {
        return reject(result.errors)
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: docsTemplate,
          context: {
            slug: node.fields.slug
          }
        })
      })
      resolve()
    }))
}
