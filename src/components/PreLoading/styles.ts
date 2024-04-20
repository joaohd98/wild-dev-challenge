"use client";

import styled, { css } from "styled-components";

export const PreLoading = styled.main`
  position: relative;
  height: 100%;
`;

export const XYZContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  ${({ theme }) => css`
    transform: translate(${theme.position.xCenter}, ${theme.position.yCenter}) scale(3);
  `}
  --clip-percentage: 40%;
  clip-path: inset(0 var(--clip-percentage) 0 var(--clip-percentage));
`;

export const XYZName = styled.h1`
  font-size: 32px;
  line-height: 38.4px;
  letter-spacing: 0.08em;
`;
