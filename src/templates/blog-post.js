import React from "react";
import { graphql } from "gatsby";
import { kebabCase } from "lodash";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import RecommendedPosts from "../components/RecommendedPosts";
import scrollToTop from "../utils/scrollToTop";
import { ArrowUpward as ArrowUp } from "@styled-icons/material-rounded/ArrowUpward";
import { Tag } from "@styled-icons/boxicons-regular/Tag";

import * as S from "../components/Post/styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  const imagePost = getImage(post.frontmatter.imagePost);

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      
        <GatsbyImage image={imagePost} />
      
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        <S.IconWrapper>
          <S.Icon>
            <Tag />
          </S.Icon>
          {post.frontmatter.tags.map((tag) => {
            return (
              <li key={tag + `tag`}>
                <S.PostTag to={`/tags/${kebabCase(tag)}/`}>{tag}</S.PostTag>
              </li>
            );
          })}
        </S.IconWrapper>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <S.IconArrowWrapper>
        <S.Icon title="Ir para o topo" onClick={scrollToTop}>
          <ArrowUp />
        </S.Icon>
      </S.IconArrowWrapper>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        tags
        imagePost {
          childImageSharp {
            gatsbyImageData(
              width: 1600
              height: 600
              formats: [AUTO, WEBP, AVIF]
              quality: 50
              breakpoints: [750, 1080, 1366, 1920]
              backgroundColor: "transparent"
              layout: CONSTRAINED
            )
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              )
          }
        }
      }
      html
      timeToRead
    }
  }
`;
export default BlogPost;
