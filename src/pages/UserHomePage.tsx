import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { MapTemprary, UberLogo } from "../assets";
import {
  BottomSearchModalForRides,
  ConfirmRideModal,
  LocationSearchModal,
  LookingForDriverModal,
} from "../components/organisms";

const UserHomePage = () => {
  const onChangeForm = async () => {
    // console.log(data);
  };

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [confirmRideOpen, setConfirmRideOpen] = useState(false);
  const [lookingForDriverModalOpen, setLookingForDriverModalOpen] =
    useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const locationModalOpenRef = useRef<HTMLDivElement | null>(null);
  const locationModalCloseRef = useRef<HTMLDivElement | null>(null);
  const ridesModalRefOpen = useRef<HTMLDivElement | null>(null);
  const confirmRideModalRef = useRef<HTMLDivElement | null>(null);
  const lookingForDriverModalRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (isLocationModalOpen) {
      gsap.to(locationModalOpenRef.current, {
        height: "70%",
        paddingTop: 24,
      });
      gsap.to(locationModalCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(locationModalOpenRef.current, {
        height: "0",
        paddingTop: 0,
        // opacity: 0,
      });
      gsap.to(locationModalCloseRef.current, {
        opacity: 0,
      });
    }
  }, [isLocationModalOpen]);

  useGSAP(() => {
    if (locationModal) {
      gsap.to(ridesModalRefOpen.current, {
        y: 0,
      });
    } else {
      gsap.to(ridesModalRefOpen.current, {
        y: "100%",
      });
    }
  }, [locationModal]);

  useGSAP(() => {
    if (confirmRideOpen) {
      gsap.to(confirmRideModalRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRideModalRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRideOpen]);

  useGSAP(() => {
    if (lookingForDriverModalOpen) {
      gsap.to(lookingForDriverModalRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(lookingForDriverModalRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [lookingForDriverModalOpen]);

  return (
    <div className="h-full overflow-hidden relative">
      <div className="relative lg:w-96 lg:m-auto sm:w-96 sm:m-auto h-auto">
        <img
          src={UberLogo}
          className="absolute w-20 top-5 left-5"
          alt="Uber Logo"
        />

        {/* Map Image for temporary use */}
        <img
          src={MapTemprary}
          alt="Map"
          className="h-[100vh] w-full object-cover"
        />

        <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
          <div
            className={`bg-white h-[30%] p-5 relative ${
              !isLocationModalOpen ? "rounded-t-xl" : "rounded-none"
            }`}
          >
            <div
              ref={locationModalCloseRef}
              className="fixed right-5 top-6 opacity-0 cursor-pointer"
            >
              <RiArrowDownWideLine
                onClick={() => setIsLocationModalOpen(false)}
                className="text-2xl font-bold"
              />
            </div>

            <h4 className="text-2xl font-semibold mb-3">Find a trip</h4>

            <div className="for-line relative">
              <div className="absolute z-10 line h-20 w-1 bg-gray-900 top-1/2 transform -translate-y-1/2 left-8 rounded-full"></div>
              {/* Form for finding a trip */}
              <form onChange={onChangeForm}>
                {/* Pick up location */}
                <div className="to mb-2">
                  <input
                    name="to"
                    placeholder="Add a pick up location"
                    type="text"
                    onClick={() => setIsLocationModalOpen(true)}
                    ref={inputRef}
                    className="bg-[#eeeeee] px-16 py-3 rounded-lg w-full mb-1"
                  />
                </div>

                {/* Destination */}
                <div className="to mb-3">
                  <input
                    name="destination"
                    placeholder="Enter your destination"
                    type="text"
                    onClick={() => setIsLocationModalOpen(true)}
                    ref={inputRef}
                    className="bg-[#eeeeee] px-16 py-3 rounded-lg w-full mb-1"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="h-0 bg-white" ref={locationModalOpenRef}>
            <LocationSearchModal
              setLocationModal={setLocationModal}
              setIsLocationModalOpen={setIsLocationModalOpen}
            />
          </div>
          <div className="relative">
            <BottomSearchModalForRides
              setLocationModal={setLocationModal}
              ridesModalRefOpen={ridesModalRefOpen}
              setConfirmRideOpen={setConfirmRideOpen}
            />
          </div>

          <div className="relative">
            <ConfirmRideModal
              setConfirmRideOpen={setConfirmRideOpen}
              confirmRideModalRef={confirmRideModalRef}
              setLookingForDriverModalOpen={setLookingForDriverModalOpen}
            />
          </div>

          <div className="relative">
            <LookingForDriverModal
              lookingForDriverModalRef={lookingForDriverModalRef}
              setLookingForDriverModalOpen={setLookingForDriverModalOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
