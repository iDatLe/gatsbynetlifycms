import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Template() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                path
                date(formatString: "MMMM DD YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
      
    `
  )
  console.log(data)


  return (
    <div className="container">
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.tittle}{" "}</h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}

    </div>
  )
}