const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const path = createFilePath({ node, getNode, basePath: 'docs' })
    createNodeField({ node, name: 'path', value: path })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const docsTemplate = path.resolve('src/templates/docs-template.js')
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                path
              }
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.path,
            component: docsTemplate,
            context: {
              path: node.fields.path
            }
          })
        })
        resolve()
      })
  })
}
