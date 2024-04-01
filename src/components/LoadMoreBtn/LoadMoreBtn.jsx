import React from "react";
import * as S from './LoadMore.styled'

const LoadMoreBtn = ({onClick}) => {
    return <S.LoadMoreBtn onClick={onClick}>Load more</S.LoadMoreBtn>
}

export default LoadMoreBtn;