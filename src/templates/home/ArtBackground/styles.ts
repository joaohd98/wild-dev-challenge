import styled from "styled-components";

export const ArtBackground = styled.div<{ $url: string }>`
  height: 100%;
`;

export const InfoContainer = styled.div`
  position: absolute;
  right: 140px;
  bottom: 80px;

  font-family: var(--helvetica);
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const TextInfo = styled.p`
  text-align: left;
`;

export const InfoDateText = styled(TextInfo)`
  text-align: right;
  margin-top: 12px;
  margin-bottom: 14px;
`;

export const InfoLink = styled.a`
  display: block;
  padding: 6px 22px;
  border-radius: 24px;

  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.blackRaisin};
  background-color: ${({ theme }) => theme.colors.white};
`;
