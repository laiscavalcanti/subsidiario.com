import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage src="../../images/avatar2.jpg" alt="Foto de Cícero" placeholder="blurred" />
    </S.AvatarWrapper>
  )
}

export default Avatar
