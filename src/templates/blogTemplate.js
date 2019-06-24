import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Template() {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark {
          html
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        } 
      }
    `
  )
  console.log(data)
  return (
    <>
    </>
  )
}