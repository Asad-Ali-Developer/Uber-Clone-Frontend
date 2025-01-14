import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCash } from "react-icons/io";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
import { captainImage } from "../../assets";

interface Props {
  setRidePopupModal: Dispatch<SetStateAction<boolean>>;
  setConfirmRidePopupModal: Dispatch<SetStateAction<boolean>>;
}

const ConfirmRidePopupModal = ({
  setRidePopupModal,
  setConfirmRidePopupModal,
}: Props) => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");



  const handleSubmitOTPAndStartRide = (e: FormEvent) => {
    e.preventDefault(); // Prevent form submission

    if (!otp) {
      setErrorMessage("Please enter the OTP.");
      return; // Prevent form submission if OTP is empty
    }

    const otpLength = otp.length; // Get the length of OTP

    if (otpLength < 4 || otpLength > 4) {
      setErrorMessage("OTP must be 4 digits long.");
      return;
    }

    // Simulating OTP verification
    console.log("OTP Submitted:", otp);
    setErrorMessage("");
    // setConfirmRidePopupModal(false);
  };

  return (
    <div className="px-2 py-4">
      <div
        onClick={() => setConfirmRidePopupModal(false)}
        className="down-arrow cursor-pointer absolute top-1 left-1/2 transform -translate-x-1/2 text-zinc-300 h-full"
      >
        <RiArrowDownWideLine className="text-3xl font-bold" />
      </div>
      <h3 className="text-2xl font-semibold py-8">
        Confirm this ride to Start!
      </h3>

      <div className="flex flex-col justify-between items-center w-full">
        <div className="w-full flex justify-between items-center bg-zinc-100 rounded-lg p-2">
          <div className="flex items-center gap-3">
            <img
              src={captainImage}
              className="w-12 h-12 object-cover rounded-full"
              alt="captainImage"
            />
            <h3 className="text-lg font-medium">Olivia Barani</h3>
          </div>
          <h3 className="text-xl font-medium">2.3KM</h3>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationDot />
            <div className="pickup">
              <h4 className="text-lg font-semibold">562/11-A</h4>
              <p className="text-sm -mt-1 text-zinc-600">
                Kaikondrahalli, Bengaluru, Karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <TbLocationFilled />
            <div className="destination">
              <h4 className="text-lg font-semibold">562/11-A</h4>
              <p className="text-sm -mt-1 text-zinc-600">
                Kaikondrahalli, Bengaluru, Karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <IoIosCash />
            <div className="cash">
              <h4 className="text-lg font-semibold">562/11-A</h4>
              <p className="text-sm -mt-1 text-zinc-600 font-medium">Rs. 200</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full mt-5">
          <form onSubmit={handleSubmitOTPAndStartRide}>
            <div className="mb-5">
              <input
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="text-xl text-black font-mono bg-[#eeeeee] py-3 rounded-md w-full text-center flex items-center font-semibold"
                placeholder="Enter your OTP"
              />

              {errorMessage && (
                <p className="text-red-600 text-sm font-medium">
                  {errorMessage}
                </p> // Display error if OTP is empty
              )}
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white w-full p-4 rounded-md font-medium flex justify-center items-center"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={() => {
                setRidePopupModal(false);
                setConfirmRidePopupModal(false);
              }}
              className="bg-red-500 hover:bg-red-600 text-white w-full p-3.5 rounded-md font-medium mt-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopupModal;
