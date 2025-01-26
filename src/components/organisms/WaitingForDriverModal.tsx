import { FaLocationDot } from "react-icons/fa6";
import { IoIosCash } from "react-icons/io";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
import { Auto, Bike, Car } from "../../assets";
import { Dispatch, SetStateAction } from "react";
import { useConfirmRideDataStore } from "../../store";

interface Props {
  setWaitingForDriverModalOpen: Dispatch<SetStateAction<boolean>>;
}

const WaitingForDriverModal = ({ setWaitingForDriverModalOpen }: Props) => {
  const { confirmRideData } = useConfirmRideDataStore();

  const captain = confirmRideData?.captain;
  const captainFullName = `${captain?.fullName.firstName} ${captain?.fullName.lastName}`;

  const ride = confirmRideData?.updatedRide;

  const vehicleType = confirmRideData?.updatedRide.vehicleType;

  return (
    <div className="relative">
      <div
        onClick={() => setWaitingForDriverModalOpen(false)}
        className="cursor-pointer absolute -top-5 left-1/2 transform 
            -translate-x-1/2 text-zinc-300"
      >
        <RiArrowDownWideLine className="text-3xl font-bold" />
      </div>

      <div className="image-texts flex justify-between items-center p-3 border-b-2 h-24">
        <div className="img">
          {vehicleType === "car" && (
            <img src={Car} alt="Car" className="w-24" />
          )}
          {vehicleType === "bike" && (
            <img src={Bike} alt="Bike" className="w-24" />
          )}
          {vehicleType === "auto" && (
            <img src={Auto} alt="Auto" className="w-24" />
          )}
        </div>
        <div className="text-right">
          <div className="font-semibold text-lg capitalize">{captainFullName}</div>
          <div className="text-xl font-semibold text-zinc-600 -my-1">
            {captain?.vehicle.plate}
          </div>
          <p className="text-sm">Maruti Suzuki Alto</p>
          <h2 className="text-sm font-semibold">OTP: {ride?.otp}</h2>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <FaLocationDot />
          <div className="pickup">
            <h4 className="text-lg font-semibold">Origin: </h4>
            <p className="text-sm -mt-1 text-zinc-600">{ride?.origin}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <TbLocationFilled />
          <div className="destination">
            <h4 className="text-lg font-semibold">Destination: </h4>
            <p className="text-sm -mt-1 text-zinc-600">{ride?.destination}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <IoIosCash />
          <div className="cash">
            <h4 className="text-lg font-semibold">Rs. {ride?.fare}</h4>
            <p className="text-sm -mt-1 text-zinc-600 font-medium">Fare</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriverModal;
