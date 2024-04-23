import styled from "styled-components";
import { CardPicture } from "@/components/CardPicture";

export const GalleryCards = styled.div`
  height: ${({ theme }) => theme.screenHeight};
  margin: ${({ theme }) => theme.padding};
`;

export const CardsContainer = styled.div`
  position: relative;
  height: ${({ theme }) => theme.screenHeight};
  margin: ${({ theme }) => theme.padding};

  > :first-child,
  > :nth-child(2),
  > :last-child {
    opacity: 1;
    visibility: visible;
  }
`;

export const Card = styled(CardPicture)`
  position: absolute;
  opacity: 0;
  visibility: hidden;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4px;
  z-index: 2;
  pointer-events: none;
`;

export const IndicatorSlideView = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-top: 2px;
`;

export const IndicatorText = styled.p`
  font-family: var(--helvetica);
  font-size: 10px;
  font-weight: 400;
  line-height: 11.5px;
  letter-spacing: 0.08em;
`;

export const Slides = styled.div`
  display: flex;
  gap: 8px;
`;

export const SlideDot = styled.div<{ $isCurrent: boolean }>`
  width: 5px;
  height: 8px;
  border-radius: 3px;
  border: 1px ${({ theme }) => theme.colors.white} solid;
  background-color: ${({ $isCurrent, theme }) => ($isCurrent ? theme.colors.white : "transparent")};
  transition: background-color 0.3s ease-in;
`;
