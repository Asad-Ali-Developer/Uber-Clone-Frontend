import { FaLocationDot } from "react-icons/fa6";
import { IoIosCash } from "react-icons/io";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
import { captainImage } from "../../assets";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setRidePopupModal: Dispatch<SetStateAction<boolean>>;
  setConfirmRidePopupModal: Dispatch<SetStateAction<boolean>>;
}

const RidePopupModal = ({
  setRidePopupModal,
  setConfirmRidePopupModal,
}: Props) => {
  return (
    <div className="px-2 py-4">
      <div
        onClick={() => setRidePopupModal(false)}
        className="down-arrow cursor-pointer absolute top-1 left-1/2 transform -translate-x-1/2 text-zinc-300 h-full"
      >
        <RiArrowDownWideLine className="text-3xl font-bold" />
      </div>
      <h3 className="text-2xl font-semibold pt-3 mb-5">New Ride Available</h3>

      <div className="flex flex-col gap-2 items-center w-full">
        <div className="w-full flex justify-between items-center bg-zinc-100 rounded-lg p-2">
          <div className="flex items-center gap-3">
            {/* User Image will placed here */}
            <img
              src={captainImage}
              className="w-12 h-12 object-cover rounded-full"
              alt="captainImage"
            />
            <h3 className="text-lg font-medium">Olivia Barani</h3>
          </div>
          <h3 className="text-xl font-medium">2.3KM</h3>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationDot />
            <div className="pickup">
              <h4 className="text-lg font-semibold">562/11-A</h4>
              <p className="text-sm -mt-1 text-zinc-600">
                Kaikondrahalli, Bengaluru, Karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <TbLocationFilled />
            <div className="destination">
              <h4 className="text-lg font-semibold">562/11-A</h4>
              <p className="text-sm -mt-1 text-zinc-600">
                Kaikondrahalli, Bengaluru, Karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <IoIosCash />
            <div className="cash">
              <h4 className="text-lg font-semibold">562/11-A</h4>
              <p className="text-sm -mt-1 text-zinc-600 font-medium">Rs. 200</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 w-full mt-5">
          <button
            onClick={() => setConfirmRidePopupModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white w-full p-3.5 rounded-md font-medium"
          >
            Accept
          </button>
          <button
            onClick={() => setRidePopupModal(false)}
            className="bg-zinc-200 hover:bg-zinc-300 w-full p-3.5 rounded-md font-medium"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopupModal;
