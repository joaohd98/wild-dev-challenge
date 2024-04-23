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
    visibility: visible;
  }
`;

export const Card = styled(CardPicture)`
  position: absolute;
  opacity: 0;
  visibility: hidden;
`;

export const TextContainer = styled.div<{ $visible: boolean }>`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease-in;
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
