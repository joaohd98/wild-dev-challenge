import styled, { css } from "styled-components";

export const CustomCursor = styled.div<{ $visible: boolean }>`
  position: absolute;
  width: 42px;
  height: 42px;
  top: -21px;
  left: -21px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;

  z-index: 10;
  pointer-events: none;

  mix-blend-mode: exclusion;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease-in;
`;

export const CircleSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 40px;
  height: 40px;

  circle {
    fill: none;
    stroke-width: 1.2;
  }
`;

export const CircleEmpty = styled.circle`
  stroke: ${({ theme }) => theme.colors.whiteOpacity};
`;

export const CircleProgress = styled.circle<{ $progress?: number }>`
  stroke: ${({ theme }) => theme.colors.white};
  stroke-linecap: round;
`;

export const Dot = styled.div<{ $hasLink: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ $hasLink, theme }) =>
    $hasLink &&
    css`
      width: 24px;
      height: 24px;
      box-shadow: ${theme.colors.white} 0px 0px 12px;
    `}
`;

export const Text = styled.p`
  position: absolute;
  top: 100%;
  font-family: var(--tungsten);
  font-size: 22px;
  line-height: 17.6px;
  letter-spacing: 0.04em;
  text-align: center;
  white-space: pre;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;
