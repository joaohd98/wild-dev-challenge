import * as S from "./styles";
import { type ArtBackgroundProps } from "@/templates/home/ArtBackground/props";
import { artBackgroundConst as C } from "@/templates/home/ArtBackground/const";
import { useArtBackgroundAnimation } from "@/templates/home/ArtBackground/animation";

export const ArtBackground = ({ current, pictures, children }: ArtBackgroundProps) => {
  const { setBackgroundRef } = useArtBackgroundAnimation(current);

  return (
    <S.ArtBackground>
      <S.BackgroundsContainer>
        {pictures.map((picture, index) => (
          <S.Container key={index} ref={setBackgroundRef(index)}>
            <S.Background $url={picture.image.big} />
            <S.InfoContainer>
              <S.TextInfo>{picture.artist}</S.TextInfo>
              <S.TextInfo>{C.companyPrefix(picture.company)}</S.TextInfo>
              <S.InfoDateText>{picture.date}</S.InfoDateText>
              <S.InfoLink href={picture.link} target="_blank">
                {C.haveLook}
              </S.InfoLink>
            </S.InfoContainer>
          </S.Container>
        ))}
      </S.BackgroundsContainer>

      {children}
    </S.ArtBackground>
  );
};
