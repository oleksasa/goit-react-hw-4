import React from 'react'
import * as S from './ErrorMessage.style'

const ErrorMessage = ({message = "Oops..."}) => {
  return (
    <S.Message>{message}</S.Message>
  )
}

export default ErrorMessage