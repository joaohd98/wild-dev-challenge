"use client";

import styled from "styled-components";

export const PreLoading = styled.div``;

export const XYZContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
`;

export const XYZName = styled.h1`
  font-size: 100px;
  letter-spacing: 0.08em;
  --stroke-width: 1px;
  -webkit-text-stroke: var(--stroke-width) ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  div {
    color: transparent;
    --background-progress: 0%;
    background-image: linear-gradient(90deg, white var(--background-progress), transparent var(--background-progress));
    background-clip: text;
    opacity: 0;
  }
`;
