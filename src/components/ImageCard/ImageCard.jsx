import React from "react";

import * as S from './ImageCard.styles'

const ImageCard = ({ alt, image, onClick }) => {
  return (
    <li>
      <S.Button onClick={onClick}>
        <S.Image src={image} alt={alt} />
      </S.Button>
    </li>
  );
};

export default ImageCard;
