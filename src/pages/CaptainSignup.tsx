import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Loader, UberDriver } from "../assets";
import { Input, InputFieldError } from "../components/atoms";
import { useCaptainSignup } from "../hooks";
import {
  captainFormDataSignup,
  captainSignupSchema,
  VehicleTypeEnum,
} from "../schemas";

const CaptainSignup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<captainFormDataSignup>({
    resolver: zodResolver(captainSignupSchema), // Apply Zod validation
  });

  const { signup, loading } = useCaptainSignup();

  const onSubmitForm = async (data: captainFormDataSignup) => {
    await signup(data);


    console.log(data);

    setTimeout(() => {
      reset();
    }, 1000);
  };

  return (
    <div className="bg-white w-full p-5 h-screen flex flex-col justify-between lg:w-96 lg:m-auto sm:w-96 sm:m-auto">
      <div>
        <img className="w-20 mb-5" src={UberDriver} alt="Uber" />

        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
          {/* Name Fields */}
          <h3 className="text-base font-medium mb-2">
            What's our Captain's name?
          </h3>
          <div className="flex justify-center items-center gap-2 mb-3 w-full">
            <div>
              <Input
                register={register}
                name="fullName.firstName" // Nested name path for firstName
                type="text"
                placeholder="First name"
              />
              {errors.fullName?.firstName && (
                <InputFieldError errors={errors.fullName?.firstName.message} />
              )}
            </div>
            <div>
              <Input
                register={register}
                name="fullName.lastName" // Nested name path for lastName
                type="text"
                placeholder="Last name"
              />
              {errors.fullName?.lastName && (
                <InputFieldError errors={errors.fullName?.lastName.message} />
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="email mb-3">
            <h3 className="text-base font-medium mb-2">
              What's our Captain's email?
            </h3>
            <Input
              register={register}
              name="email"
              type="email"
              placeholder="email@example.com"
            />
            {errors.email && <InputFieldError errors={errors.email.message} />}
          </div>

          {/* Password Field */}
          <div className="password mb-3">
            <h3 className="text-base font-medium mb-2">Enter Password:</h3>
            <Input
              register={register}
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <InputFieldError errors={errors.password.message} />
            )}
          </div>

          <div className="flex gap-2 mb-3">
            {/* Vehicle Color */}
            <div className="vehicle-color w-2/5">
              <h3 className="text-base font-medium mb-2">Vehicle color:</h3>
              <Input
                register={register}
                name="vehicle.color"
                type="text"
                placeholder="Vehicle Color"
              />
              {errors.vehicle?.color && (
                <InputFieldError errors={errors.vehicle?.color?.message} />
              )}
            </div>

            {/* Vehicle Plate */}
            <div className="vehicle-plate w-3/5">
              <h3 className="text-base font-medium mb-2">Vehicle plate:</h3>
              <Input
                register={register}
                name="vehicle.plate"
                type="text"
                placeholder="Vehicle Plate"
              />
              {errors.vehicle?.plate && (
                <InputFieldError errors={errors.vehicle?.plate?.message} />
              )}
            </div>
          </div>

          <div className="flex gap-2 mb-3">
            {/* Vehicle Capacity */}
            <div className="vehicle-capcity w-3/5">
              <h3 className="text-base font-medium mb-2">Vehicle capacity:</h3>
              <Input
                register={register}
                name="vehicle.capacity"
                type="number"
                placeholder="Vehicle Capacity"
              />
              {errors.vehicle?.capacity && (
                <InputFieldError errors={errors.vehicle?.capacity?.message} />
              )}
            </div>

            {/* Vehicle Type */}
            <div className="vehicle-type w-2/5">
              <h3 className="text-base font-medium mb-2">Vehicle type:</h3>
              <select
                {...register("vehicle.vehicleType")}
                className="w-full p-3 bg-[#eeeeee] text-[#9CA3BD] rounded-md placeholder:text-sm"
              >
                <option value="">Vehicle Type</option>
                <option value={VehicleTypeEnum.car} className="text-black">
                  Car
                </option>
                <option
                  value={VehicleTypeEnum.motorcycle}
                  className="text-black"
                >
                  Motorcycle
                </option>
                <option value={VehicleTypeEnum.auto} className="text-black">
                  Auto
                </option>
              </select>

              {errors.vehicle?.vehicleType && (
                <InputFieldError errors={errors.vehicle?.plate?.message} />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#111] text-white w-full py-3 px-4 rounded-md mb-3 font-semibold flex items-center justify-center"
          >
            {loading ? (
              <img src={Loader} className="w-7 h-7" alt="Loading" />
            ) : (
              "Signup"
            )}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/captain/login" className="text-blue-500 font-medium">
            Login here
          </Link>
        </p>
      </div>

      {/* Terms & Conditions */}
      <p className="text-center text-[12px] leading-1">
        This site is protected by reCAPTCHA and the{" "}
        <span className="font-medium underline"> Google Privacy Policy</span>{" "}
        and{" "}
        <span className="font-medium underline"> Terms of Services Apply</span>{" "}
        .
      </p>
    </div>
  );
};

export default CaptainSignup;
