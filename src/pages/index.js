import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"



const BlogLink = styled(Link)`
  text-decoration:none;
  color:black;
  `

  const BlogTile = styled.h3 `
    margin-bottom:20px;
  `


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>
          blog posts
        </h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        { 
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTile>{node.frontmatter.title } - {node.frontmatter.date}</BlogTile>
              <p>{node.excerpt}</p>
              </BlogLink>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql `
  query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id 
          frontmatter {
            description
            title
            date
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