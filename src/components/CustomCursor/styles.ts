import styled from "styled-components";

export const CustomCursor = styled.div`
  position: absolute;
  width: 42px;
  height: 42px;
  top: -21px;
  left: -21px;

  z-index: 9;
  pointer-events: none;

  mix-blend-mode: exclusion;
`;

export const ProgressSVG = styled.svg<{ $visible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 40px;
  height: 40px;
  mix-blend-mode: exclusion;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.15s ease-in;
`;

export const CircleEmpty = styled.circle`
  stroke: ${({ theme }) => theme.colors.whiteOpacity};
  fill: none;
  stroke-width: 2;
`;

export const CircleProgress = styled.circle<{ $progress?: number }>`
  stroke-dashoffset: -100;
  stroke: ${({ theme }) => theme.colors.white};
  stroke-linecap: round;
  fill: none;
  stroke-width: 2;
`;

export const CircleSmallDot = styled.circle`
  fill: ${({ theme }) => theme.colors.white};
  stroke-width: 2;
`;

export const LinkContainer = styled.div<{ $visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  margin-top: 10px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.15s ease-in;
`;

export const Dot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.white} 0px 0px 12px;
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
