import React from "react";

import * as S from "./ImageModal.styled";

const ImageModal = ({ isOpen, onClose }) => {
  return (
    <S.Modal isOpen={!!isOpen} onRequestClose={onClose} style={{
      overlay: {
        display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: "20px"

      }
    }}>
      {typeof isOpen === "object" && (
        <img src={isOpen.urls.regular} alt={isOpen.alt} />
      )}
    </S.Modal>
  );
};

export default ImageModal;
