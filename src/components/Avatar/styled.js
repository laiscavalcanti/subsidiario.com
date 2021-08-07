import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    height: 3.75rem;
    margin: auto;
    width: 3.75rem;
  }
  ${media.lessThan("large")`
  height: 3.5rem;
  width: 3.5rem;
  margin-left: 0.4rem;
  `}
`
