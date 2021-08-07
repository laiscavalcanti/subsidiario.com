import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const PostItemSearch = ({ slug, description, title, date, tags }) => (
  <S.PostItemLink to={slug} >
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} - {tags}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItemSearch.propTypes = {
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PostItemSearch
