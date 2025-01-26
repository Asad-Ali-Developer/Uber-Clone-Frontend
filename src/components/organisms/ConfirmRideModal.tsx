import { Dispatch, SetStateAction } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCash } from "react-icons/io";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
import { Auto, Bike, Car } from "../../assets";
import { fareDataResponse } from "../../interfaces";
import { getFareByVehicleType } from "../../utils";

interface Props {
  setConfirmRideOpen: Dispatch<SetStateAction<boolean>>;
  setLookingForDriverModalOpen: Dispatch<SetStateAction<boolean>>;
  handleCreateRide: () => void;
  originDestinationData: { origin: string; destination: string };
  faresData: fareDataResponse | null;
  vehicleType: string;
  rideCreationLoading: boolean;
}

const ConfirmRideModal = ({
  setConfirmRideOpen,
  setLookingForDriverModalOpen,
  handleCreateRide,
  originDestinationData,
  faresData,
  vehicleType,
  rideCreationLoading,
}: Props) => {
  const fare = getFareByVehicleType(vehicleType, faresData);

  const handleCreateConfirmRide = () => {
    handleCreateRide();

    setTimeout(() => {
      setLookingForDriverModalOpen(true);
      setConfirmRideOpen(false);
    }, 400);
  };

  return (
    <div>
      <div className="p-4">
        <div
          onClick={() => setConfirmRideOpen(false)}
          className="down-arrow cursor-pointer absolute top-2 left-1/2 transform -translate-x-1/2 text-zinc-300 h-full"
        >
          <RiArrowDownWideLine className="text-3xl font-bold" />
        </div>
        <h3 className="text-2xl font-semibold mb-10">Confirm your Ride</h3>

        <div className="flex flex-col gap-2 items-center">
          <div className="image-styling-1 w-52 h-16 bg-blue-50 rounded-3xl flex justify-center items-start my-3">
            <div className="image-styling-2 w-32 h-12 bg-blue-100 rounded-3xl flex justify-center items-center">
              {/* <img src={Car} alt="Ride" className="w-24 -mt-10" /> */}
              {vehicleType === "car" && (
                <img src={Car} alt="Car" className="w-24 -mt-10" />
              )}
              {vehicleType === "bike" && (
                <img src={Bike} alt="Bike" className="w-24 -mt-10" />
              )}
              {vehicleType === "auto" && (
                <img src={Auto} alt="Auto" className="w-24 -mt-10" />
              )}
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <div className="icon">
                <FaLocationDot />
              </div>
              <div className="pickup">
                <h4 className="text-lg font-semibold">Origin: </h4>
                <p className="text-sm -mt-1 text-zinc-600">
                  {originDestinationData.origin}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
              <div className="icon">
                <TbLocationFilled />
              </div>
              <div className="destination">
                <h4 className="text-lg font-semibold">Destination: </h4>
                <p className="text-sm -mt-1 text-zinc-600">
                  {originDestinationData.destination}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <div className="icon">
                <IoIosCash />
              </div>
              <div className="cash">
                <h4 className="text-lg font-semibold">{fare}</h4>
                <p className="text-zinc-600 font-medium">Fare</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleCreateConfirmRide}
            disabled={rideCreationLoading}
            className={`${
              rideCreationLoading ? "bg-green-300" : "bg-green-600"
            } text-white w-full px-4 py-3 rounded-md font-medium mt-5`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRideModal;
