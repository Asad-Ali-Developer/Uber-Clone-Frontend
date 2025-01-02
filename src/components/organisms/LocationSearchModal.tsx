import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";

interface Props {
  setLocationModalOpen: Dispatch<SetStateAction<boolean>>;
  allLocationModalOpen: boolean;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  locationModalCloseRef: MutableRefObject<HTMLDivElement | null>;
}

const LocationSearchModal = ({
  inputRef,
  allLocationModalOpen,
  setLocationModalOpen,
  locationModalCloseRef
}: Props) => {
  return (
    <div className="bg-white">
      <div
        className={`h-[30%] p-5 relative ${
          !allLocationModalOpen ? "rounded-t-xl" : "rounded-none"
        }`}
      >
        <div
          ref={locationModalCloseRef}
          className="absolute right-6 top-6 opacity-0 cursor-pointer"
        >
          <RiArrowDownWideLine
            onClick={() => setLocationModalOpen(false)}
            className="text-2xl font-bold"
          />
        </div>
        <h4 className="text-2xl font-semibold mb-3">Find a trip</h4>

        {/* Form Section */}
        <div className="for-line relative">
          <div className="absolute line h-20 w-1 bg-gray-900 top-1/2 transform -translate-y-1/2 left-8 rounded-full"></div>
          <form>
            <div className="to mb-2">
              <input
                name="to"
                placeholder="Add a pick up location"
                type="text"
                onClick={() => setLocationModalOpen(true)}
                ref={inputRef}
                className="bg-[#eeeeee] px-16 py-3 rounded-lg w-full mb-1"
              />
            </div>
            <div className="to mb-3">
              <input
                name="destination"
                placeholder="Enter your destination"
                type="text"
                onClick={() => setLocationModalOpen(true)}
                ref={inputRef}
                className="bg-[#eeeeee] px-16 py-3 rounded-lg w-full mb-1"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchModal;
