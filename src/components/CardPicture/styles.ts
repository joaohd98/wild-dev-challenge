import styled from "styled-components";
import { type CardPictureProps } from "@/components/CardPicture/props";
import { type TransientPick } from "@/utils/transient-pick";

export const CardPicture = styled.div`
  position: relative;
  width: 250px;
  height: 332px;
  transform: perspective(1400px);
  transform-style: preserve-3d;
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
