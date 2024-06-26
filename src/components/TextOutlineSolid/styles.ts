import styled from "styled-components";

export const TextOutlineSolid = styled.div`
  position: relative;
  width: 100%;

  p {
    font-size: 101px;
    line-height: 84px;
    letter-spacing: 0.055em;
    text-align: center;
    text-transform: uppercase;
    white-space: pre;
  }
`;

export const SolidView = styled.div`
  overflow: hidden;
`;

export const SolidText = styled.p`
  position: relative;

  float: left;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const OutlineText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
  pointer-events: none;
  z-index: 0;
`;
