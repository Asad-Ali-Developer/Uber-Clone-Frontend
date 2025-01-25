import { useEffect, useRef, useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MapTemprary, UberLogo } from "../../assets";
import { rideDataSocketResponse } from "../../interfaces";
import { useCaptainAuth, useSocket } from "../../services";
import { useGSAPAnimationFn } from "../../utils";
import {
  CaptainDetails,
  ConfirmRidePopupModal,
  RidePopupModal,
} from "../molecules";

const CaptainHomePageLayout = () => {
  // ( RidePopupModal: UseRef's and State Variables)
  const [ridePopupModal, setRidePopupModal] = useState(false);
  const ridePopupModalRef = useRef<HTMLDivElement | null>(null);

  // ( ConfirmRidePopupModal: UseRef's and State Variables)
  const [confirmRidePopupModal, setConfirmRidePopupModal] = useState(false);
  const confirmRidePopupModalRef = useRef<HTMLDivElement | null>(null);

  // Setting-up the Passenger Details Modal
  const [fareAndPassengerDetails, setFareAndPassengerDetails] =
    useState<rideDataSocketResponse | null>(null);

  useGSAPAnimationFn({
    modalState: ridePopupModal,
    modalRef: ridePopupModalRef,
  });

  useGSAPAnimationFn({
    modalState: confirmRidePopupModal,
    modalRef: confirmRidePopupModalRef,
  });

  const { authenticatedCaptain } = useCaptainAuth();

  const captainId = authenticatedCaptain?._id;

  const { socket, joinRoom, updateCaptainLocation } = useSocket();

  useEffect(() => {
    if (captainId) {
      if (socket) {
        joinRoom(captainId, "captain");
      }

      // Updating Captain Location
      const time = 100000;
      const intervalForUpdatingLocationOfCaptain = setInterval(() => {
        if (socket) {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              updateCaptainLocation(captainId, {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            });
          }
        }
      }, time);

      return () => clearInterval(intervalForUpdatingLocationOfCaptain);
    }
  }, [captainId]);

  socket?.on("new-ride", (data: rideDataSocketResponse) => {
    console.log(data);
    setRidePopupModal(true);
    setFareAndPassengerDetails(data);
  });

  socket?.on("confirm-ride-by-captain", (data) => {
    console.log(data);
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
      <div className="img h-3/5">
        <img
          src={MapTemprary}
          alt="Map"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="md:h-2/5 lg:h-2/5 sm:h-2/5">
        <div className="captain-details p-3">
          <CaptainDetails />
        </div>

        <div
          ref={ridePopupModalRef}
          className="absolute bottom-0 p-3 w-full bg-white rounded-t-xl z-10 translate-y-full"
        >
          <RidePopupModal
            fareAndPassengerDetails={fareAndPassengerDetails}
            setRidePopupModal={setRidePopupModal}
            setConfirmRidePopupModal={setConfirmRidePopupModal}
          />
        </div>

        <div
          ref={confirmRidePopupModalRef}
          className="absolute bottom-0 p-3 w-full h-screen bg-white rounded-t-xl z-10 translate-y-full"
        >
          <ConfirmRidePopupModal
            setRidePopupModal={setRidePopupModal}
            setConfirmRidePopupModal={setConfirmRidePopupModal}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptainHomePageLayout;
