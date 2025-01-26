import { Dispatch, SetStateAction } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCash } from "react-icons/io";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import { captainImage } from "../../assets";
import { useCompleteRideByCaptain } from "../../hooks";
import { useFareAndPassengerDetails } from "../../store";

interface Props {
  setConfirmRidePopupModal: Dispatch<SetStateAction<boolean>>;
}

const CompleteRideModal = ({ setConfirmRidePopupModal }: Props) => {
  const { fareAndPassengerDetails } = useFareAndPassengerDetails();
  const { completeRide, loading } = useCompleteRideByCaptain();

  const user = fareAndPassengerDetails?.rideWithUser.userId;

  const userFullName = `${user?.fullName.firstName} ${user?.fullName.lastName}`;

  const ride = fareAndPassengerDetails?.rideWithUser;

  const rideId = fareAndPassengerDetails?.rideWithUser._id || ""
  console.log(rideId)

  const distance = fareAndPassengerDetails?.distance;

  const handleCompleteRide = async () => {
    setConfirmRidePopupModal(false);
    try {
      // console.log(rideId)
      const response = await completeRide(rideId)
      console.log(response)
      if (response?.status === 200) {
        toast.success("Ride Completed Successfully!");
      } else {
        toast.error("Error completing Ride!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-2 py-4">
      <div
        onClick={() => setConfirmRidePopupModal(false)}
        className="down-arrow cursor-pointer absolute top-1 left-1/2 transform -translate-x-1/2 text-zinc-300 h-full"
      >
        <RiArrowDownWideLine className="text-3xl font-bold" />
      </div>
      <h3 className="text-2xl font-semibold py-5">Finish this Ride!</h3>

      <div className="flex flex-col gap-5 items-center w-full">
        <div className="w-full flex justify-between items-center bg-yellow-400/70 rounded-lg p-2">
          <div className="flex items-center gap-3">
            <img
              src={captainImage}
              className="w-12 h-12 object-cover rounded-full"
              alt="captainImage"
            />
            <h3 className="text-lg font-medium">
              {user ? userFullName : "Captain"}
            </h3>
          </div>
          <h3 className="text-xl font-medium">
            {distance ? distance : "12"}KM
          </h3>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <div className="w-3">
              <FaLocationDot />
            </div>
            <div className="pickup">
              <h4 className="text-lg font-semibold">Origin:</h4>
              <p className="text-sm -mt-1 text-zinc-600">
                {ride ? ride?.origin : "USA, America"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <div className="w-3">
              <TbLocationFilled />
            </div>
            <div className="destination">
              <h4 className="text-lg font-semibold">Destination:</h4>
              <p className="text-sm -mt-1 text-zinc-600">
                {ride ? ride.destination : "USA, America"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
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
        </div>
        <button
          type="submit"
          onClick={handleCompleteRide}
          className={`${
            loading ? "bg-green-400" : "bg-green-600"
          } hover:bg-green-700 text-white w-full p-4 rounded-md font-medium flex justify-center items-center mt-5`}
        >
          Finish Ride
        </button>
      </div>
    </div>
  );
};

export default CompleteRideModal;
