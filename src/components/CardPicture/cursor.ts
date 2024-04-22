import { useCursorListener } from "@/hooks/cursor-listener";
import { useCustomCursorContext } from "@/contexts/custom-cursor";
import { type useCardPictureAnimation } from "@/components/CardPicture/animation";

type Props = Omit<ReturnType<typeof useCardPictureAnimation>, "textsRef" | "artRef"> & { name: string };

export const useCardPictureCursor = ({ cardRef, name, onMouseMoveCard, onMouseEnterOrLeaveCard }: Props) => {
  const { showAsLink, noLongerLink } = useCustomCursorContext();

  useCursorListener(
    cardRef,
    {
      onListenMouseEnter: () => {
        showAsLink(name);
        onMouseEnterOrLeaveCard("enter");
      },
      onListenMouseLeave: () => {
        noLongerLink();
        onMouseEnterOrLeaveCard("leave");
      },
      onListenMouseMove: onMouseMoveCard,
    },
    []
  );
};
