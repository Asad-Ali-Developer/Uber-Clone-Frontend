import { useRef, useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { RiArrowUpWideLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { UberLogo } from "../../assets";
import { useGSAPAnimationFn } from "../../utils";
import { CompleteRideModal, LiveTrackingForCaptain } from "../molecules";
import { useFareAndPassengerDetails } from "../../store";

const RidingCaptainLayout = () => {
  // ( CompleteRideModalRef: UseRef's and State Variables)
  const completeRideModalRef = useRef<HTMLDivElement | null>(null);
  const [confirmRidePopupModal, setConfirmRidePopupModal] = useState(false);
  const { fareAndPassengerDetails } = useFareAndPassengerDetails();

  const distance = fareAndPassengerDetails?.distance;

  useGSAPAnimationFn({
    modalState: confirmRidePopupModal,
    modalRef: completeRideModalRef,
  });

  return (
    <div className="h-screen w-full lg:w-96 lg:m-auto sm:w-96 sm:m-auto relative overflow-hidden">
      {/* Logo */}

      <div className="absolute top-5 px-3 flex justify-between items-center w-full">
        <img src={UberLogo} className="h-12" alt="Uber-Logo" />

        <Link
          to="/captain/logout"
          className="p-2 bg-white rounded-full shadow-md"
        >
          <HiOutlineLogout className="text-lg" />
        </Link>
      </div>

      {/* Map Image for temporary use */}
      {/* <div className="img h-4/5">
        <img
          src={MapTemprary}
          alt="Map"
          className="h-full w-full object-cover"
        />
      </div> */}
      <LiveTrackingForCaptain />

      <div
        onClick={() => setConfirmRidePopupModal(true)}
        className="h-[30vh] md:h-1/5 lg:h-1/5 sm:h-1/5 px-5 py-10 bg-yellow-400 relative rounded-lg flex justify-center items-center"
      >
        <div className="down-arrow cursor-pointer absolute top-1 left-1/2 transform -translate-x-1/2 text-zinc-300 h-full">
          <RiArrowUpWideLine className="text-3xl font-bold text-yellow-50" />
        </div>

        <div className="flex items-center justify-between w-full mt-3 flex-col gap-7">
          <h3 className="text-3xl font-semibold text-white">
            {distance ? distance : "4"}KM Away!
          </h3>
          <button
            onClick={() => setConfirmRidePopupModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 rounded-md font-medium w-full"
          >
            Complete Ride
          </button>
        </div>
      </div>

      <div
        ref={completeRideModalRef}
        className="absolute bottom-0 p-3 w-full bg-white rounded-t-xl z-10 translate-y-full"
      >
        <CompleteRideModal
          setConfirmRidePopupModal={setConfirmRidePopupModal}
        />
      </div>
    </div>
  );
};

export default RidingCaptainLayout;
