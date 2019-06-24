import React from "react"
import Template from "../templates/blogTemplate";
import { graphql } from "gatsby";

export default () => {
  // console.log(data)
  return (
    <Template />
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`