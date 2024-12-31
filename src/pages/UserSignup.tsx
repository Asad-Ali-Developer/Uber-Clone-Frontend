import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Loader, UberLogo } from "../assets";
import { Input, InputFieldError } from "../components/atoms";
import { useUserSignup } from "../hooks";
import { userFormDataSignup, userSignupSchema } from "../schemas";

const UserSignup = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userFormDataSignup>({
    resolver: zodResolver(userSignupSchema), // Apply Zod validation
  });

  const { signup, loading } = useUserSignup();

  const onSubmitForm = async (data: userFormDataSignup) => {
    try {
      await signup(data);

      setTimeout(() => {
        reset();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white w-full p-5 h-screen flex flex-col justify-between lg:w-96 lg:m-auto sm:w-96 sm:m-auto">
      <div>
        <img className="w-20 mb-5" src={UberLogo} alt="Uber" />

        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
          {/* Name Fields */}
          <h3 className="text-base font-medium mb-2">What's your name?</h3>
          <div className="flex justify-center items-center gap-2 mb-3 w-full">
            <div>
              <Input
                register={register}
                name="fullName.firstName" // Nested name path for firstName
                type="text"
                width="1/2"
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
                width="1/2"
                placeholder="Last name"
              />
              {errors.fullName?.lastName && (
                <InputFieldError errors={errors.fullName?.lastName.message} />
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="email mb-3">
            <h3 className="text-base font-medium mb-2">What's your email?</h3>
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
          <Link to="/user/login" className="text-blue-500 font-medium">
            Login here
          </Link>
        </p>
      </div>

      {/* Terms & Conditions */}
      <p className="text-center text-[12px] leading-1">
        By proceeding, you consent to receive calls, WhatsApp, or SMS messages,
        including by automated means, from{" "}
        <span className="font-medium">Uber</span> and its affiliates.
      </p>
    </div>
  );
};

export default UserSignup;
