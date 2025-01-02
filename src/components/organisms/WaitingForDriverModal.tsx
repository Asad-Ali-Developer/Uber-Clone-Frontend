import { FaLocationDot } from "react-icons/fa6";
import { IoIosCash } from "react-icons/io";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
import { Car } from "../../assets";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setWaitingForDriverModalOpen: Dispatch<SetStateAction<boolean>>;
}

const WaitingForDriverModal = ({ setWaitingForDriverModalOpen }: Props) => {
  return (
    <div className="relative">
      <div
        onClick={() => setWaitingForDriverModalOpen(false)}
        className="cursor-pointer absolute -top-5 left-1/2 transform 
            -translate-x-1/2 text-zinc-300"
      >
        <RiArrowDownWideLine className="text-3xl font-bold" />
      </div>

      <div className="image-texts flex justify-between items-center p-3 border-b-2">
        <div className="img">
          <img src={Car} alt="Car" className="w-24" />
        </div>
        <div className="text-right">
          <div className="font-semibold text-lg">Asad Ali</div>
          <div className="text-xl font-semibold text-zinc-600 -my-1">
            CTK-4736
          </div>
          <p className="text-sm">Maruti Suzuki Alto</p>
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
            <p className="text-sm -mt-1 text-zinc-600 font-medium">Rs. 200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriverModal;
