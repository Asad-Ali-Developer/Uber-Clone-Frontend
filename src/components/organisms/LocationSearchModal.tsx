import {
  ChangeEvent,
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { RiArrowDownWideLine } from "react-icons/ri";

interface Props {
  setLocationModalOpen: Dispatch<SetStateAction<boolean>>;
  allLocationModalOpen: boolean;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  locationModalCloseRef: MutableRefObject<HTMLDivElement | null>;
  setOriginDestinationData: Dispatch<
    SetStateAction<{ origin: string; destination: string }>
  >;
  originDestinationData: { origin: string; destination: string };
  handleGetFare: () => void;
  fareLoading: boolean;
  setAllLocationModalOpen: Dispatch<SetStateAction<boolean>>;
  setAllLocationsModalToOpenRideModal: Dispatch<SetStateAction<boolean>>;
}

const LocationSearchModal = ({
  inputRef,
  originDestinationData,
  allLocationModalOpen,
  setLocationModalOpen,
  locationModalCloseRef,
  setOriginDestinationData,
  handleGetFare,
  fareLoading,
  setAllLocationModalOpen,
  setAllLocationsModalToOpenRideModal,
}: Props) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    setOrigin(originDestinationData.origin);
    setDestination(originDestinationData.destination);
  }, [originDestinationData]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "origin") {
      // setOrigin(value);
      // setOrigin(originDestinationData.origin)
      setOriginDestinationData((prevData) => ({
        ...prevData,
        origin: value,
      }));
    } else if (name === "destination") {
      setDestination(value);
      // setDestination(originDestinationData.destination)
      setOriginDestinationData((prevData) => ({
        ...prevData,
        destination: value,
      }));
    }
  };

  const handleFindTrip = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGetFare();

    // To Close the AllLocationsModal
    setAllLocationModalOpen(false);

    // To Open the AllRidesModal
    setAllLocationsModalToOpenRideModal(true);
  };

  useEffect(() => {
    if (!originDestinationData.origin || !originDestinationData.destination) {
      setDisableButton(true);
    } else if (
      originDestinationData.origin ||
      originDestinationData.destination
    ) {
      setDisableButton(false);
    }
  }, [originDestinationData]);

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
        <form onSubmit={handleFindTrip}>
          <div className="for-line relative">
            <div className="absolute line h-20 w-1 bg-gray-900 top-1/2 transform -translate-y-1/2 left-8 rounded-full"></div>
            <div className="to mb-2">
              <input
                name="origin"
                placeholder="Add a pick up location"
                type="text"
                value={origin}
                onChange={handleInput}
                onClick={() => setLocationModalOpen(true)}
                ref={inputRef}
                className="bg-[#eeeeee] px-16 py-3 font-medium rounded-lg w-full mb-1"
              />
            </div>
            <div className="to mb-3">
              <input
                name="destination"
                placeholder="Enter your destination"
                type="text"
                value={destination}
                onChange={handleInput}
                onClick={() => setLocationModalOpen(true)}
                ref={inputRef}
                className="bg-[#eeeeee] px-16 py-3 font-medium rounded-lg w-full mb-1"
              />
            </div>
          </div>

          {allLocationModalOpen && (
            <button
              disabled={fareLoading || disableButton}
              className={`${
                fareLoading || disableButton ? "bg-zinc-700" : "bg-black"
              } text-white px-6 py-3 rounded-lg w-full -mt-1 font-medium`}
            >
              Find trip
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LocationSearchModal;
