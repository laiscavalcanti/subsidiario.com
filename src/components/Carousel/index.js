import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import getThemeColor from "../../utils/getThemeColor";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as S from "./styled";

SwiperCore.use([Autoplay, Pagination, Navigation]);

class Slideshow extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const params =
      (".swiper-container",
      {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        loop: true,
      });

    return (
      <S.CarouselWrapper>
        <div className="slideshow ">
          <div className="swiper-container">
            <Swiper {...params}>
              {posts &&
                posts.map(({ node: post }) => (
                  <div className="carousel-items" key={post.fields.slug}>
                    <S.CarouselLink
                      to={post.fields.slug}
                      cover
                      direction="right"
                      duration={0.5}
                      bg={getThemeColor()}
                    >
                     <S.CarouselImage>
                        <GatsbyImage
                          image={getImage(post.frontmatter.image)}
                          alt="pictures-slide"
                        />
                    </S.CarouselImage>
                      <S.CarouselInfo>
                        <S.CarouselDate>
                          {post.frontmatter.date} - {post.frontmatter.tags}
                        </S.CarouselDate>
                        <S.CarouselTitle>
                          {post.frontmatter.title}
                        </S.CarouselTitle>
                        <S.CarouselAuthor>
                          {post.frontmatter.author}
                        </S.CarouselAuthor>
                        <S.CarouselDescription>
                          {post.frontmatter.description}
                        </S.CarouselDescription>
                      </S.CarouselInfo>
                    </S.CarouselLink>
                  </div>
                ))}
            </Swiper>
          </div>
        </div>
      </S.CarouselWrapper>
    );
  }
}

Slideshow.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { templateKey: { eq: "slideshow" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                author
                tags
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                title
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 850
                      formats: [AUTO, WEBP, AVIF]
                      quality: 50
                      breakpoints: [750, 1080, 1366, 1920]
                      backgroundColor: "transparent"
                      layout: CONSTRAINED
                    )
                  }
                }
              }
              timeToRead
            }
          }
        }
      }
    `}
    render={(data, count) => <Slideshow data={data} count={count} />}
  />
);
