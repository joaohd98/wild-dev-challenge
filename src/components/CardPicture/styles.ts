import styled, { css } from "styled-components";
import { type CardPictureProps } from "@/components/CardPicture/props";
import { type TransientPick } from "@/utils/transient-pick";

export const CardPicture = styled.div<TransientPick<CardPictureProps, "position">>`
  position: absolute;
  width: 250px;
  height: 332px;
  top: 0;
  left: 0;

  ${({ $position, theme }) => {
    if ($position === "left") {
      return css`
        transform: translate(${theme.position.xLeft}, ${theme.position.yBottom});
      `;
    }

    if ($position === "right") {
      return css`
        transform: translate(${theme.position.xRight}, ${theme.position.yTop});
      `;
    }

    return css`
      transform: translate(${theme.position.xCenter}, ${theme.position.yCenter}) scale(2.06);
    `;
  }};
`;

export const Art = styled.div<TransientPick<CardPictureProps, "picture">>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background-image: url("${({ $picture }) => $picture.image.small}");
  background-repeat: no-repeat;
  background-size: cover;

  outline: 1px solid ${({ theme }) => theme.colors.black};
  outline-offset: -1px;
  border-radius: 10px;
`;

export const TextContainer = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4px;
`;

export const IndicatorSlideView = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  z-index: 1;
  margin-top: 2px;
`;

export const IndicatorText = styled.p`
  font-family: var(--helvetica);
  font-size: 5px;
  font-weight: 400;
  line-height: 6.5px;
  letter-spacing: 0.08em;
`;

export const Slides = styled.div`
  display: flex;
  gap: 5px;
`;

export const SlideDot = styled.div<{ $isCurrent: boolean }>`
  width: 1.5px;
  height: 3.5px;
  border-radius: 3px;
  border: 1px ${({ theme }) => theme.colors.white} solid;
  background-color: ${({ $isCurrent, theme }) => ($isCurrent ? theme.colors.white : "transparent")};
`;
