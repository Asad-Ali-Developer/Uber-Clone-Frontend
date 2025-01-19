import { IoIosCash } from "react-icons/io";
import { TbLocationFilled } from "react-icons/tb";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { MapTemprary, Car } from "../../assets";

const RidingUserLayout = () => {
  return (
    <div className="h-screen w-full lg:w-96 lg:m-auto sm:w-96 sm:m-auto relative overflow-hidden">
      {/* Logo */}
      <Link 
        to="/user/home" 
        className="logo absolute top-5 right-5 p-3 bg-white rounded-full shadow-md">
        <TiHomeOutline className="text-xl" />
      </Link>

      {/* Map Image for temporary use */}
      <div className="img">
        <img
          src={MapTemprary}
          alt="Map"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-6 h-1/2 md:h-1/2 lg:h-1/2 sm:h-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-auto lg:gap-4">
          <div className="image-texts flex justify-between items-center lg:mt-3">
            <div className="img">
              <img src={Car} alt="Car" className="w-20" />
            </div>

            <div className="text-right">
              <div className="font-semibold text-lg">Asad Ali</div>
              <div className="text-xl font-semibold text-zinc-600 -my-1">
                CTK-4736
              </div>
              <p className="text-sm">Maruti Suzuki Alto</p>
            </div>
          </div>

          <div className="location-cash flex flex-col gap-3 lg:gap-5">
            <div className="flex items-center gap-5 border-b-2 py-3 lg:py-5">
              <TbLocationFilled />
              <div className="destination">
                <h4 className="text-lg font-semibold">562/11-A</h4>
                <p className="text-sm -mt-1 text-zinc-600">
                  Kaikondrahalli, Bengaluru, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <IoIosCash />
              <div className="cash">
                <h4 className="text-lg font-semibold">562/11-A</h4>
                <p className="text-sm -mt-1 text-zinc-600 font-medium">
                  Rs. 200
                </p>
              </div>
            </div>

            <button className="bg-green-600 text-white w-full px-4 py-3 rounded-md font-medium mt-2">
              Make a payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidingUserLayout;
