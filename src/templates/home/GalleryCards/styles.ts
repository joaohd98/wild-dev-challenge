import styled from "styled-components";
import { CardPicture } from "@/components/CardPicture";

export const GalleryCards = styled.div`
  position: relative;
  height: ${({ theme }) => theme.screenHeight};
  margin: ${({ theme }) => theme.padding};

  > :first-child,
  > :nth-child(2),
  > :last-child {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Card = styled(CardPicture)`
  position: absolute;
  opacity: 0;
  transform: scale(0.8);
`;
