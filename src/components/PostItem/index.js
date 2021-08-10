import React from "react"
import PropTypes from "prop-types"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
//import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const PostItem = ({ slug, description, title, image, date, tags, author }) => (
  <S.PostItemLink to={slug} >
    <S.PostItemWrapper>
     <S.PostItemImg>
        <GatsbyImage image={getImage(image)} className=".img" />
      </S.PostItemImg>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} - {tags}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemAuthor>{author}</S.PostItemAuthor>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
