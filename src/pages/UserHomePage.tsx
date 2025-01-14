import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import debounce from "lodash.debounce";
import { useEffect, useRef, useState } from "react";
import { MapTemprary, UberLogo } from "../assets";
import {
  AllLocationsModal,
  AllRidesModal,
  ConfirmRideModal,
  LocationSearchModal,
  LookingForDriverModal,
  WaitingForDriverModal,
} from "../components/organisms";
import { useGetLocationSuggestions } from "../hooks";
import { useGSAPAnimationFn } from "../utils";
import { LocationSuggestion } from "../interfaces";

const UserHomePage = () => {
  const { getSuggestions, loading } = useGetLocationSuggestions();

  const [originDestinationData, setOriginDestinationData] = useState({
    origin: "",
    destination: "",
  });

  // console.log(originDestinationData)

  const [originSuggestions, setOriginSuggestions] = useState<
    LocationSuggestion[]
  >([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<
    LocationSuggestion[]
  >([]);

  const [isOriginSearchActive, setIsOriginSearchActive] = useState(true); // Track active search

  // Function to fetch origin suggestions (debounced)
  const fetchOriginSuggestions = debounce(async () => {
    if (originDestinationData.origin.trim()) {
      const response = await getSuggestions(originDestinationData.origin);
      if (response?.suggestions && response.suggestions.length > 0) {
        setOriginSuggestions(response.suggestions);
        setIsOriginSearchActive(true);
      } else {
        console.log("No suggestions found");
      }
    } 
  }, 500); // Adjust debounce time as needed

  const fetchDestinationSuggestions = debounce(async () => {
    if (originDestinationData.destination.trim()) {
      const response = await getSuggestions(originDestinationData.destination);

      if (response?.suggestions && response.suggestions.length > 0) {
        setDestinationSuggestions(response.suggestions);
        setIsOriginSearchActive(false);
      } else {
        console.log("No suggestions found");
      }
    } 
  }, 500); 

  useEffect(() => {
    fetchOriginSuggestions();

    // Clean up the debounced function
    return () => {
      fetchOriginSuggestions.cancel();
    };
  }, [originDestinationData.origin]);

  useEffect(() => {
    fetchDestinationSuggestions();

    // Clean up the debounced function
    return () => {
      fetchDestinationSuggestions.cancel();
    };
  }, [originDestinationData.destination]);

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

  // WaitingForDriverModal (Ref and state variables)
  const waitingForDriverModalRef = useRef<HTMLDivElement | null>(null);
  const [waitingForDriverModalOpen, setWaitingForDriverModalOpen] =
    useState(false);

  useGSAP(() => {
    if (allLocationsModalOpen) {
      gsap.to(allLocationModalRef.current, {
        height: "62.5%",
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

  useGSAPAnimationFn({
    modalState: allLocationsModalToOpenRideModal,
    modalRef: ridesModalRef,
  });

  useGSAPAnimationFn({
    modalState: confirmRideOpen,
    modalRef: confirmRideModalRef,
  });

  useGSAPAnimationFn({
    modalState: lookingForDriverModalOpen,
    modalRef: lookingForDriverModalRef,
  });

  useGSAPAnimationFn({
    modalState: waitingForDriverModalOpen,
    modalRef: waitingForDriverModalRef,
  });

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
            originDestinationData={originDestinationData}
            setOriginDestinationData={setOriginDestinationData}
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
              originSuggestions={originSuggestions}
              destinationSuggestions={destinationSuggestions}
              isOriginSearchActive={isOriginSearchActive}
              setOriginDestinationData={setOriginDestinationData}
              loading={loading}
            />
          </div>

          <div
            ref={ridesModalRef}
            className="absolute z-10 bottom-0 bg-white w-full px-2 py-8 flex flex-col gap-1 rounded-t-xl translate-y-full border-t-2 border-zinc-200"
          >
            <AllRidesModal
              setLocationModal={setAllLocationsModalToOpenRideModal}
              setConfirmRideOpen={setConfirmRideOpen}
            />
          </div>

          <div
            ref={confirmRideModalRef}
            className="absolute z-10 bottom-0 bg-white w-full px-2 py-8 flex flex-col gap-1 rounded-t-xl translate-y-full border-t-2 border-zinc-200"
          >
            <ConfirmRideModal
              setConfirmRideOpen={setConfirmRideOpen}
              setLookingForDriverModalOpen={setLookingForDriverModalOpen}
            />
          </div>

          <div
            ref={lookingForDriverModalRef}
            className="absolute z-10 bottom-0 bg-white w-full px-4 py-8 flex flex-col gap-1 rounded-t-xl translate-y-full border-t-2 border-zinc-200"
          >
            <LookingForDriverModal
              setLookingForDriverModalOpen={setLookingForDriverModalOpen}
            />
          </div>

          <div
            ref={waitingForDriverModalRef}
            className="absolute z-10 bottom-0 bg-white w-full px-4 py-8 flex flex-col gap-1 rounded-t-xl border-t-2 translate-y-full border-zinc-200"
          >
            <WaitingForDriverModal
              setWaitingForDriverModalOpen={setWaitingForDriverModalOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
