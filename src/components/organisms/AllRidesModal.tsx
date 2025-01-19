import { Dispatch, SetStateAction } from "react";
import { FaUser } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Auto, Bike, Car, Loader } from "../../assets";
import { fareDataResponse } from "../../interfaces";

interface Props {
  setLocationModal: Dispatch<SetStateAction<boolean>>;
  setConfirmRideOpen: Dispatch<SetStateAction<boolean>>;
  faresData: fareDataResponse | null; // Adjusted type
  setVehiclType: Dispatch<SetStateAction<string>>;
  fareLoading: boolean;
}

const AllRidesModal = ({
  setLocationModal,
  setConfirmRideOpen,
  faresData,
  setVehiclType,
  fareLoading,
}: Props) => {
  return (
    <div>
      <div
        onClick={() => {
          setLocationModal(false);
        }}
        className="down-arrow cursor-pointer absolute top-2 left-1/2 transform -translate-x-1/2 text-zinc-300 h-full"
      >
        <RiArrowDownWideLine className="text-3xl font-bold" />
      </div>
      <h3 className="text-2xl font-semibold mt-1 mb-5">Choose a Vehicle</h3>

      <div
        onClick={() => {
          setConfirmRideOpen(true);
          setLocationModal(false);
          setVehiclType("car");
        }}
        className="flex items-center justify-between p-2 border-2 border-zinc-50
            active:border-black rounded-lg cursor-pointer"
      >
        <div className="vehicle-image w-14">
          <img src={Car} alt="Car" className="h-12" />
        </div>
        <div className="texts flex flex-col justify-center w-1/2">
          <h4 className="name text-lg font-medium flex gap-5">
            <div className="vehicle">UberGo</div>
            <span className="flex items-center gap-1">
              <FaUser className="w-3 h-3" />
              <span className="text-base">4</span>
            </span>
          </h4>
          <h5 className="flex gap-1 items-center">
            <MdAccessTime className="w-3 h-3" />
            <span className="text-[11px] font-medium">
              {fareLoading ? (
                <img className="w-4 h-4" src={Loader} alt="Loading..." />
              ) : (
                `${faresData?.formattedDuration} away`
              )}
            </span>
          </h5>
          <p className="text-xs">Affordable, Compact ride.</p>
        </div>
        <div className="price text-lg text-right font-semibold text-gray-600 w-20">
          {fareLoading ? (
            <img className="w-8 h-8 ml-6" src={Loader} alt="Loading..." />
          ) : (
            `Rs. ${faresData?.fare.car}`
          )}
        </div>
      </div>

      {/* Bike */}
      <div
        onClick={() => {
          setConfirmRideOpen(true);
          setLocationModal(false);
          setVehiclType("bike");
        }}
        className="flex items-center justify-between p-2 border-2 border-zinc-50
            active:border-black rounded-lg cursor-pointer"
      >
        <div className="vehicle-image w-14">
          <img src={Bike} alt="Car" className="h-12" />
        </div>
        <div className="texts flex flex-col justify-center w-1/2">
          <h4 className="name text-lg font-medium flex gap-5">
            <div className="vehicle">Moto</div>
            <span className="flex items-center gap-1">
              <FaUser className="w-3 h-3" />
              <span className="text-base">4</span>
            </span>
          </h4>
          <h5 className="flex gap-1 items-center">
            <MdAccessTime className="w-3 h-3" />
            <span className="text-[11px] font-medium">
              {fareLoading ? (
                <img className="w-4 h-4" src={Loader} alt="Loading..." />
              ) : (
                `${faresData?.formattedDuration} away`
              )}
            </span>
          </h5>
          <p className="text-xs">Affordable, Bike ride.</p>
        </div>
        <div className="price text-lg text-right  font-semibold text-gray-600 w-20">
          {fareLoading ? (
            <img className="w-8 h-8 ml-6" src={Loader} alt="Loading..." />
          ) : (
            `Rs. ${faresData?.fare.bike}`
          )}
        </div>
      </div>

      {/* Auto */}
      <div
        onClick={() => {
          setConfirmRideOpen(true);
          setLocationModal(false);
          setVehiclType("bike");
        }}
        className="flex items-center justify-between p-2 border-2 border-zinc-50
            active:border-black rounded-lg cursor-pointer"
      >
        <div className="vehicle-image w-14">
          <img src={Auto} alt="Car" className="h-12" />
        </div>
        <div className="texts flex flex-col justify-center w-1/2">
          <h4 className="name text-lg font-medium flex gap-5">
            <div className="vehicle">UberAuto</div>
            <span className="flex items-center gap-1">
              <FaUser className="w-3 h-3" />
              <span className="text-base">6</span>
            </span>
          </h4>
          <h5 className="flex gap-1 items-center">
            <MdAccessTime className="w-3 h-3" />
            <span className="text-[11px] font-medium">
              {fareLoading ? (
                <img className="w-4 h-4" src={Loader} alt="Loading..." />
              ) : (
                `${faresData?.formattedDuration} away`
              )}
            </span>
          </h5>
          <p className="text-xs">Affordable, Auto ride.</p>
        </div>
        <div className="price text-lg text-right font-semibold text-gray-600 w-20">
          {fareLoading ? (
            <img className="w-8 h-8 ml-6" src={Loader} alt="Loading..." />
          ) : (
            `Rs. ${faresData?.fare.auto}`
          )}
        </div>
      </div>
    </div>
  );
};

export default AllRidesModal;
