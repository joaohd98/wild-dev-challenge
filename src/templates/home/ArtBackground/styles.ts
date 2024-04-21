import styled from "styled-components";

export const ArtBackground = styled.div<{ $url: string }>`
  position: relative;
  height: 100%;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: -9.75%;
    top: -87%;
    height: 274%;
    width: 116%;
    background-image: url("${({ $url }) => $url}");
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(100px);
    z-index: -1;
  }
`;

export const InfoContainer = styled.div`
  position: absolute;
  right: 152px;
  bottom: 120px;

  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const TextInfo = styled.p`
  font-family: var(--helvetica);
  text-align: left;
`;

export const InfoDateText = styled(TextInfo)`
  text-align: right;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const InfoLink = styled.a`
  display: block;
  padding: 8px 14px;
  border-radius: 24px;

  font-family: var(--helvetica);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackRaisin};
  background-color: ${({ theme }) => theme.colors.white};
  transition-property: box-shadow;
  transition-duration: 0.4s;
  transition-timing-function: linear;

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.white} 0px 0px 10px;
  }
`;
