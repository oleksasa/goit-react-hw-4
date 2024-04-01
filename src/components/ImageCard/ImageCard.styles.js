import styled from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  display: inline-block;
  height: 100%;
  width: 100%;
  transition: 0.3s ease-in-out;
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 18%,
      rgba(253, 187, 45, 1) 100%
    );
    ${Image} {
      transform: scale(0.5);
    }
  }
`;
