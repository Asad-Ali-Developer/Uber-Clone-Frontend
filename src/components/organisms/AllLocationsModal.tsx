import { Dispatch, SetStateAction } from "react";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
  setAllLocationsModalToOpenRideModal: Dispatch<SetStateAction<boolean>>;
  setAllLocationModalOpen: Dispatch<SetStateAction<boolean>>;
}

const AllLocationsModal = ({
  setAllLocationsModalToOpenRideModal,
  setAllLocationModalOpen,
}: Props) => {
  const locations = [
    {
      id: 1,
      name: "Location 1",
      address: "Mohallah Sarwar Colony Toba Road Jhang Saddar",
    },
    {
      id: 2,
      name: "Location 2",
      address: "Phase 22B Shah Latif Town, Near Malir, Karachi",
    },
    {
      id: 3,
      name: "Location 3",
      address: "Address 3",
    },
    {
      id: 4,
      name: "Location 4",
      address: "Address 4",
    },
    {
      id: 5,
      name: "Location 5",
      address: "Address 5",
    },
  ];

  return (
    <div className="px-4 flex flex-col gap-1">
      {/* Locations */}
      {locations.map((location) => (
        <div
          key={location.id}
          onClick={() => {
            // To Close the AllLocationsModal
            setAllLocationModalOpen(false);

            // To Open the AllRidesModal
            setAllLocationsModalToOpenRideModal(true);
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
            {location.address}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllLocationsModal;
