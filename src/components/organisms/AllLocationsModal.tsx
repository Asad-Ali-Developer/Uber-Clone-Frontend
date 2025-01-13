import { Dispatch, SetStateAction } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { LocationSuggestion } from "../../interfaces";
import { Loader } from "../../assets";

interface Props {
  setAllLocationsModalToOpenRideModal: Dispatch<SetStateAction<boolean>>;
  setAllLocationModalOpen: Dispatch<SetStateAction<boolean>>;
  originSuggestions: LocationSuggestion[];
  destinationSuggestions: LocationSuggestion[];
  isOriginSearchActive: boolean;
  setOriginDestinationData: Dispatch<
    SetStateAction<{ origin: string; destination: string }>
  >;
  loading: boolean;
}

const AllLocationsModal = ({
  setAllLocationsModalToOpenRideModal,
  setAllLocationModalOpen,
  loading,
  originSuggestions,
  destinationSuggestions,
  isOriginSearchActive,
  setOriginDestinationData,
}: Props) => {
  const handleSuggestionLabelClick = (label: string) => {
    setOriginDestinationData((prevData) => ({
      ...prevData,
      [isOriginSearchActive ? "origin" : "destination"]: label,
    }));
  };

  const suggestionsToDisplay = isOriginSearchActive
    ? originSuggestions
    : destinationSuggestions;

  return (
    <div className="px-4 flex flex-col gap-1 h-full overflow-y-auto relative">
      {/* Locations */}
      {loading ? (
        <img
          className="h-10 absolute left-1/2 transform -translate-x-1/2"
          src={Loader}
          alt="Loading..."
        />
      ) : (
        suggestionsToDisplay.map((location, index) => (
          <div
            key={index}
            onClick={() => {
              // To Close the AllLocationsModal
              // setAllLocationModalOpen(false);

              // To Open the AllRidesModal
              // setAllLocationsModalToOpenRideModal(true);

              handleSuggestionLabelClick(location.label);
            }}
            className="location flex items-center justify-start w-full border-2
          border-zinc-50 px-2 py-3 rounded-lg active:border-black cursor-pointer"
          >
            <div className="locationLogo flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full mr-3">
              <FaLocationDot className="w-4 h-4" />
            </div>
            <div
              // onClick={() =>}
              className="font-medium text-base w-[80%]"
            >
              {location.label}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllLocationsModal;
