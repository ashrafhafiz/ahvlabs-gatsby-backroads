const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allPages: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allPages.edges.forEach(edge => {
    createPage({
      path: `tous/${edge.node.slug}`,
      component: path.resolve("./src/templates/tour.template.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
