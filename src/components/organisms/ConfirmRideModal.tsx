import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCash } from "react-icons/io";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
import { Car } from "../../assets";

interface Props {
  confirmRideModalRef: MutableRefObject<HTMLDivElement | null>;
  setConfirmRideOpen: Dispatch<SetStateAction<boolean>>;
  setLookingForDriverModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ConfirmRideModal = ({
  confirmRideModalRef,
  setConfirmRideOpen,
  setLookingForDriverModalOpen,
}: Props) => {
  
  return (
    <div
      ref={confirmRideModalRef}
      className="absolute z-10 bottom-0 bg-white w-full px-2 py-8 flex flex-col 
        gap-1 rounded-t-xl translate-y-full"
    >
      <div className="p-4">
        <div
          onClick={() => setConfirmRideOpen(false)}
          className="down-arrow cursor-pointer absolute top-2 left-1/2 transform 
        -translate-x-1/2 text-zinc-300 h-full"
        >
          <RiArrowDownWideLine className="text-3xl font-bold" />
        </div>
        <h3 className="text-2xl font-semibold pt-2 mb-5">Confirm your Ride</h3>
        <div className="flex flex-col gap-2 items-center">
          <div className="image-styling-1 w-52 h-20 bg-blue-50 rounded-3xl flex justify-center items-center mb-3">
            <div className="image-styling-2 w-32 h-20 bg-blue-100 rounded-3xl flex justify-center items-center">
              <img src={Car} alt="Ride" className="w-24" />
            </div>
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
                <p className="text-sm -mt-1 text-zinc-600 font-medium">
                  Rs. 200
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setLookingForDriverModalOpen(true)}
            className="bg-green-600 text-white w-full px-4 py-3 rounded-md font-medium mt-5"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRideModal;
