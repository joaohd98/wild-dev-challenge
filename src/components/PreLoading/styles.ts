"use client";

import styled, { css } from "styled-components";

export const PreLoading = styled.div``;

export const XYZContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  ${({ theme }) => css`
    transform: translate(${theme.position.xCenter}, ${theme.position.yCenter}) scale(4);
  `}
  perspective: 400px;
  z-index: 9;
`;

export const XYZName = styled.h1`
  font-size: 18px;
  line-height: 24.4px;
  letter-spacing: 0.08em;
  -webkit-text-stroke: 0.2px ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  div {
    color: transparent;
    transform: translateY(-50px) rotate(20deg);
    --background-progress: 0%;
    background-image: linear-gradient(90deg, white var(--background-progress), transparent var(--background-progress));
    background-clip: text;
    opacity: 0;
  }
`;
