import styled from "styled-components";
import Image from "next/image";

export const CardPicture = styled.div`
  position: relative;
  width: 250px;
  height: 332px;
`;

export const ArtContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: perspective(1400px);
  transform-style: preserve-3d;
`;

export const Art = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  outline: 1px solid ${({ theme }) => theme.colors.black};
  outline-offset: -1px;
  border-radius: 10px;
`;
