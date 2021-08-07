import React from "react"
import propTypes from "prop-types"
import {Link }from "gatsby"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <Link to={prevPage} >
        {" "}
        ← Página anterior
      </Link>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <Link to={nextPage} cover direction="right" duration={0.5} bg={getThemeColor}>
        Próxima página →{" "}
      </Link>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
