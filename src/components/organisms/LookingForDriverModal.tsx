import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";

interface Props {
  lookingForDriverModalRef: MutableRefObject<HTMLDivElement | null>;
  setLookingForDriverModalOpen: Dispatch<SetStateAction<boolean>>;
}

const LookingForDriverModal = ({ lookingForDriverModalRef, setLookingForDriverModalOpen }: Props) => {
  return (
    <div
      ref={lookingForDriverModalRef}
      className="absolute z-10 bottom-0 bg-white w-full px-2 py-8 flex flex-col 
        gap-1 rounded-t-xl translate-y-full"
    >
      <div className="p-4">
        <div
          onClick={() => setLookingForDriverModalOpen(false)}
          className="down-arrow cursor-pointer absolute top-2 left-1/2 transform 
        -translate-x-1/2 text-zinc-300 h-full"
        >
          <RiArrowDownWideLine className="text-3xl font-bold" />
        </div>
        <h3 className="text-2xl font-semibold pt-2 mb-5">Looking for Driver</h3>
      </div>
    </div>
  );
};

export default LookingForDriverModal;
