import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import { GridWrapper } from "../components/GridPost/styled"

const Tags = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <GridWrapper>
        {edges.map(
          ({
            node: {
              frontmatter: {
                author,
                tags,
                date,
                description,
                title,
                image
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              author={author}
              slug={slug}
              tags={tags}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              image={image}
            />
          )
        )}
      </GridWrapper>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            title
            date(formatString: "MMMM DD, YYYY")
            description
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 350
                  height: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 50
                  breakpoints: [750, 1080, 1366, 1920]
                  backgroundColor: "transparent"
                )
              }
            }
            tags
          }
        }
      }
    }
  }
`
