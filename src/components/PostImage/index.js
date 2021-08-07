import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const ImagePost = ({ children }) => {
  return <S.PostImage>{children}</S.PostImage>
}

ImagePost.propTypes = {
  imagePost: PropTypes.object,
}

export default ImagePost
