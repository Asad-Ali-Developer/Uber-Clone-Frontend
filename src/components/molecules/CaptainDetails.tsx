import { MdOutlineAccessTime } from "react-icons/md";
import { RiSpeedUpLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";
import { captainImage } from "../../assets";

const CaptainDetails = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center p-2 mt-2">
        <div className="flex gap-3 items-center">
          <img
            src={captainImage}
            className="w-12 h-12 object-cover rounded-full border-2 border-gray-100"
            alt="Captain"
          />
          <h3 className="text-xl font-medium">Olivia Barani</h3>
        </div>
        <div>
          <h3 className="text-xl font-medium">$ 295.20</h3>
          <p className="text-sm">Earned</p>
        </div>
      </div>

      <div className="flex justify-between items-center bg-zinc-100 p-2 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <MdOutlineAccessTime className="w-8 h-8" />
          <h3 className="font-medium">10.2</h3>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <RiSpeedUpLine className="w-8 h-8" />
          <h3 className="font-medium">30KM</h3>
          <p className="text-xs text-gray-600">Total Distance</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SlNotebook className="w-8 h-8" />
          <h3 className="font-medium">Asad Ali</h3>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
