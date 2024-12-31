import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from "react";

interface Props {
  children: ReactNode;
  moduleRefPrimary?: MutableRefObject<HTMLDivElement | null>;
  moduleRefSecondary?: MutableRefObject<HTMLDivElement | null>;
  onClickPrimary?: Dispatch<SetStateAction<boolean>>;
  onClickSecondary?: Dispatch<SetStateAction<boolean>>;
  onClickTertiary?: Dispatch<SetStateAction<boolean>>;
}

const BookingModule = ({
  children,
  moduleRefPrimary,
  onClickPrimary,
  onClickSecondary,
  onClickTertiary,
}: Props) => {
  const handleClick = (section: string) => {
    switch (section) {
      case "primary":
        onClickPrimary?.((prevState) => !prevState); // Toggling the state
        break;
      case "secondary":
        onClickSecondary?.((prevState) => !prevState); // Toggling the state
        break;
      case "tertiary":
        onClickTertiary?.((prevState) => !prevState); // Toggling the state
        break;
      default:
        break;
    }
  };

  return (
    <div
      ref={moduleRefPrimary}
      onClick={() => onClickPrimary}
      className="absolute z-10 bottom-0 bg-white w-full px-2 py-8 flex flex-col gap-1 rounded-t-xl translate-y-full"
    >
      {children}
    </div>
  );
};

export default BookingModule;
