import { FaUser } from "react-icons/fa6";
import { Auto, Bike, Car } from "../../assets";
import { MdAccessTime } from "react-icons/md";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";

interface Props {
  ridesModalRefOpen: MutableRefObject<HTMLDivElement | null>;
  setLocationModal: Dispatch<SetStateAction<boolean>>;
  setConfirmRideOpen: Dispatch<SetStateAction<boolean>>;
}

const BottomSearchModalForRides = ({
  ridesModalRefOpen,
  setLocationModal,
  setConfirmRideOpen
}: Props) => {
  const rides = [
    {
      id: 1,
      vehicle: "UberGo",
      image: Car,
      price: 193,
      duration: 2,
      seats: 4,
      vehicleDurability: "Compact",
    },
    {
      id: 2,
      vehicle: "Moto",
      image: Bike,
      price: 65,
      duration: 3,
      seats: 1,
      vehicleDurability: "Bike",
    },
    {
      id: 3,
      vehicle: "UberAuto",
      image: Auto,
      price: 135,
      duration: 4,
      seats: 6,
      vehicleDurability: "Auto",
    },
  ];

  return (
    <div>
      <div
        ref={ridesModalRefOpen}
        className="absolute z-10 bottom-0 bg-white w-full px-2 py-8 flex flex-col 
        gap-1 rounded-t-xl translate-y-full"
      >
        <div
          onClick={() => {
            setLocationModal(false);
          }}
          className="down-arrow cursor-pointer absolute top-2 left-1/2 transform -translate-x-1/2 text-zinc-300 h-full"
        >
          <RiArrowDownWideLine className="text-3xl font-bold" />
        </div>
        <h3 className="text-2xl font-semibold mt-1 mb-5">Choose a Vehicle</h3>

        {rides.map((ride) => (
          <div
            key={ride.id}
            onClick={() =>  setConfirmRideOpen(true)}
            className="flex items-center justify-between p-2 border-2 border-zinc-50
            active:border-black rounded-lg cursor-pointer"
          >
            <div className="vehicle-image w-14">
              <img src={ride.image} alt={ride.vehicle} className="h-12" />
            </div>
            <div className="texts flex flex-col justify-center w-1/2">
              <h4 className="name text-lg font-medium flex gap-5">
                <div className="vehicle">{ride.vehicle}</div>
                <span className="flex items-center gap-1">
                  <FaUser className="w-3 h-3" />
                  <span className="text-base">{ride.seats}</span>
                </span>
              </h4>
              <h5 className="flex gap-1 items-center">
                <MdAccessTime className="w-3 h-3" />
                <span className="text-xs font-medium">
                  {ride.duration} mins away
                </span>
              </h5>
              <p className="text-xs">
                Affordable, {ride.vehicleDurability} ride.
              </p>
            </div>
            <div className="price text-lg font-semibold text-gray-600 ">
              Rs. {ride.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomSearchModalForRides;
