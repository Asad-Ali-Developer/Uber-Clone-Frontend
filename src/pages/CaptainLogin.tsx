import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Loader, UberDriver } from "../assets";
import { Input, InputFieldError, LinkButton } from "../components/atoms";
import { useCaptainLogin } from "../hooks";
import { captainFormDataLogin, captainLoginSchema } from "../schemas";

const CaptainLogin = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<captainFormDataLogin>({
    resolver: zodResolver(captainLoginSchema),
  });

  const { login, loading } = useCaptainLogin();

  const onSubmitForm = async (data: captainFormDataLogin) => {
    await login(data);

    setTimeout(() => {
      reset();
    }, 1000);
  };

  return (
    <div className="bg-white w-full p-7 h-screen flex flex-col justify-between lg:w-96 lg:m-auto sm:w-96 sm:m-auto">
      <div>
        <img className="w-20 mb-5" src={UberDriver} alt="Uber" />

        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
          <h3 className="text-base font-medium mb-2">What's your email?</h3>
          {/* Email */}

          <div className="email mb-5">
            <Input
              register={register}
              name="email"
              type="email"
              placeholder="email@example.com"
            />
            {errors.email && <InputFieldError errors={errors.email.message} />}
          </div>

          {/* Password */}
          <div className="password mb-5">
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

          <button
            type="submit"
            className="bg-[#111] text-white w-full py-3 px-4 rounded-md mb-3 font-semibold flex items-center justify-center"
          >
            {loading ? (
              <img src={Loader} className="w-7 h-7" alt="Loading" />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center text-sm">
          Join a fleet?{" "}
          <Link to="/captain/signup" className="text-blue-500 font-medium">
            Register as a Captain
          </Link>
        </p>
      </div>

      <LinkButton
        textColor="white"
        link="/user/login"
        text="Sign in as User"
        tailwaindBgColor="bg-green-500"
      />
    </div>
  );
};

export default CaptainLogin;
