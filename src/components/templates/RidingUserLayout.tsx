import { useEffect } from "react";
import { IoIosCash } from "react-icons/io";
import { TbLocationFilled } from "react-icons/tb";
import { TiHomeOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { rideCompletedDataResponse } from "../../interfaces";
import { useSocket } from "../../services";
import { useConfirmRideDataStore } from "../../store";
import { LiveTracking, VehicleType } from "../molecules";

const RidingUserLayout = () => {
  const { confirmRideData } = useConfirmRideDataStore();
  const { socket } = useSocket();
  const navigate = useNavigate();

  const captain = confirmRideData?.captain;

  const captainFullName = `${captain?.fullName.firstName} ${captain?.fullName.lastName}`;

  const ride = confirmRideData?.updatedRide;

  // VehicleType
  const vehicleType = ride?.vehicleType as string;

  useEffect(() => {
    if (socket) {
      const handleRideCompleted = (data: rideCompletedDataResponse) => {
        console.log(data);
        toast.success(data.messageNotification);
        navigate("/user/home");
      };

      socket.on("ride-completed", handleRideCompleted);

      // Cleanup function to remove the listener
      return () => {
        socket.off("ride-completed", handleRideCompleted);
      };
    }
  }, [socket]);

  return (
    <div className="h-[100vh] w-full lg:w-96 lg:m-auto sm:w-96 sm:m-auto relative overflow-hidden">
      {/* Logo */}
      <Link
        to="/user/home"
        className="logo absolute top-5 right-5 p-3 bg-white rounded-full shadow-md"
      >
        <TiHomeOutline className="text-xl" />
      </Link>

      {/* Map Image for temporary use */}
      {/* <div className="img">
        <img
          src={MapTemprary}
          alt="Map"
          className="h-full w-full object-cover"
        />
      </div> */}
      <LiveTracking />

      <div className="px-6 bg-white md:h-1/2 lg:h-1/2 sm:h-1/2 flex flex-col justify-between absolute bottom-3 w-full py-2">
        <div className="flex flex-col gap-auto lg:gap-4">
          <div className="image-texts flex justify-between items-center lg:mt-3">
            <div className="img">
              <VehicleType vehicleType={vehicleType} />
            </div>

            <div className="text-right">
              <div className="font-semibold text-lg">
                {captain ? captainFullName : "Captain"}
              </div>
              <div className="text-xl font-semibold text-zinc-600 -my-1">
                {captain ? captain?.vehicle.plate : "CTK-4736"}
              </div>
              <p className="text-sm">Maruti Suzuki Alto</p>
            </div>
          </div>

          <div className="location-cash flex flex-col gap-3 lg:gap-5">
            <div className="flex items-center gap-5 border-b-2 py-3 lg:py-5">
              <div className="w-3">
                <TbLocationFilled />
              </div>
              <div className="destination">
                <h4 className="text-lg font-semibold">Destination:</h4>
                <p className="text-sm -mt-1 text-zinc-600">
                  {ride ? ride?.destination : "USA, America"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-3">
                <IoIosCash />
              </div>
              <div className="cash">
                <h4 className="text-lg font-semibold">
                  Rs. {ride ? ride?.fare : "500"}
                </h4>
                <p className="text-sm -mt-1 text-zinc-600 font-medium">Fare</p>
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
