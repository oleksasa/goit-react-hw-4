import React from "react";

import * as S from './ImageCard.styles'

const ImageCard = ({ alt, image, onClick }) => {
  return (
    <li>
      <S.Div>
        <S.Image src={image} alt={alt} onClick={onClick}/>
      </S.Div>
    </li>
  );
};

export default ImageCard;
