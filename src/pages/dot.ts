import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { MapTemprary, UberLogo } from "../assets";
import {
  AllLocationsModal,
  AllRidesModal,
  ConfirmRideModal,
  LookingForDriverModal,
} from "../components/organisms";
import LocationSearchModal from "../components/organisms/LocationSearchModal";

const UserHomePage = () => {
  // LocationSearchModal (Refs and State Variables)
  // Input Ref to Open the AllLocationsModal when clicking on the input field.
  const inputRef = useRef<HTMLInputElement | null>(null);
  // This Ref is to close to allMocationsModal
  const locationModalCloseRef = useRef<HTMLDivElement | null>(null);

  // AllLocationsModal (Ref and state variables)
  const allLocationModalRef = useRef<HTMLDivElement | null>(null);
  const [allLocationsModalOpen, setAllLocationsModalOpen] = useState(false);
  const [
    allLocationsModalToOpenRideModal,
    setAllLocationsModalToOpenRideModal,
  ] = useState(false);

  // AllRidesModal (Ref and state variables
  const ridesModalRef = useRef<HTMLDivElement | null>(null);
  const confirmRideModalRef = useRef<HTMLDivElement | null>(null);
  const [confirmRideOpen, setConfirmRideOpen] = useState(false);

  // LookingForDriverModal (Ref and state variables)
  const lookingForDriverModalRef = useRef<HTMLDivElement | null>(null);
  const [lookingForDriverModalOpen, setLookingForDriverModalOpen] =
    useState(false);

  useGSAP(() => {
    if (allLocationsModalOpen) {
      gsap.to(allLocationModalRef.current, {
        height: "70%",
        paddingTop: 20,
      });
      gsap.to(locationModalCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(allLocationModalRef.current, {
        height: "0",
        paddingTop: 0,
      });
      gsap.to(locationModalCloseRef.current, {
        opacity: 0,
      });
    }
  }, [allLocationsModalOpen]);

  useGSAP(() => {
    if (allLocationsModalToOpenRideModal) {
      gsap.to(ridesModalRef.current, {
        y: 0,
      });
    } else {
      gsap.to(ridesModalRef.current, {
        y: "100%",
      });
    }
  }, [allLocationsModalToOpenRideModal]);

  useGSAP(() => {
    if (confirmRideOpen) {
      gsap.to(confirmRideModalRef.current, {
        y: 0,
      });
    } else {
      gsap.to(confirmRideModalRef.current, {
        y: "100%",
      });
    }
  }, [confirmRideOpen]);

  useGSAP(() => {
    if (lookingForDriverModalOpen) {
      gsap.to(lookingForDriverModalRef.current, {
        y: 0,
      });
    } else {
      gsap.to(lookingForDriverModalRef.current, {
        y: "100%",
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
          <LocationSearchModal
            inputRef={inputRef}
            locationModalCloseRef={locationModalCloseRef}
            allLocationModalOpen={allLocationsModalOpen}
            setLocationModalOpen={setAllLocationsModalOpen}
          />

          <div className="h-0 bg-white" ref={allLocationModalRef}>
            <AllLocationsModal
              setAllLocationModalOpen={setAllLocationsModalOpen}
              setAllLocationsModalToOpenRideModal={
                setAllLocationsModalToOpenRideModal
              }
            />
          </div>

          <div
            ref={ridesModalRef}
            className="absolute z-10 bottom-0 bg-white w-full px-2 py-8 flex flex-col gap-1 rounded-t-xl translate-y-full"
          >
            <AllRidesModal
              setLocationModal={setAllLocationsModalToOpenRideModal}
              setConfirmRideOpen={setConfirmRideOpen}
            />
          </div>

          <div
            ref={confirmRideModalRef}
            className="absolute z-10 bottom-0 bg-white w-full px-2 py-8 flex flex-col gap-1 rounded-t-xl translate-y-full"
          >
            <ConfirmRideModal
              setConfirmRideOpen={setConfirmRideOpen}
              setLookingForDriverModalOpen={setLookingForDriverModalOpen}
            />
          </div>

          <div ref={lookingForDriverModalRef}>
            <LookingForDriverModal
              setLookingForDriverModalOpen={setLookingForDriverModalOpen}
              lookingForDriverModalOpen={lookingForDriverModalOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
