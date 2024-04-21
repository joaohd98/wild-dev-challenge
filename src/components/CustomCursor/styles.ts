import styled from "styled-components";

export const CustomCursor = styled.div`
  position: absolute;
  width: 42px;
  height: 42px;
  top: -21px;
  left: -21px;

  display: none;
  //display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  pointer-events: none;
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

export const CircleProgress = styled.circle<{ $progress?: number; $visible?: boolean }>`
  stroke: ${({ theme }) => theme.colors.white};
  stroke-linecap: round;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
