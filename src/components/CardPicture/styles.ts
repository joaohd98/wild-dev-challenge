import styled, { css } from "styled-components";
import { type CardPictureProps } from "@/components/CardPicture/props";
import { type TransientPick } from "@/utils/transient-pick";

export const CardPicture = styled.div<TransientPick<CardPictureProps, "position">>`
  position: absolute;
  width: 248px;
  height: 330px;
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
  outline: 2.5px solid ${({ theme }) => theme.colors.black};
  outline-offset: -2.5px;
  border-radius: 10px;
`;
