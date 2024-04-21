import * as S from "./styles";
import { type ArtBackgroundProps } from "@/templates/home/ArtBackground/props";
import { artBackgroundConst as C } from "@/templates/home/ArtBackground/const";

export const ArtBackground = ({ current, pictures, children }: ArtBackgroundProps) => {
  return (
    <S.ArtBackground $url={current.image.big}>
      <S.InfoContainer>
        <S.TextInfo>{current.artist}</S.TextInfo>
        <S.TextInfo>{C.companyPrefix(current.company)}</S.TextInfo>
        <S.InfoDateText>{current.date}</S.InfoDateText>
        <S.InfoLink href={current.link} target="_blank">
          {C.haveLook}
        </S.InfoLink>
      </S.InfoContainer>
      {children}
    </S.ArtBackground>
  );
};
