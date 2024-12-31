import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  placeholder: string;
  type: string;
  width?: string;
  height?: string;
  roundedSize?: string;
  paddingX?: string;
  paddingY?: string;
  fontSize?: string;
  fontWeight?: string;
}

const Input = ({
  register,
  name,
  placeholder,
  type,
  width,
  height,
  roundedSize,
  paddingX,
  paddingY,
  fontSize,
  fontWeight,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev); // This is also performing the boolean functionality
  };

  const isPasswordField = type === "password";

  return (
    <div className="relative">
      <input
        {...register(name)}
        type={isPasswordField && showPassword ? "text" : type}
        placeholder={placeholder}
        className={`bg-[#eeeeee] w-${width} h-${height} px-4 py-3 rounded-${roundedSize} placeholder:text-sm w-full mb-1 font-${fontWeight}`}
        style={{
          padding: `${paddingY} ${paddingX}`,
          fontSize: fontSize,
        }}
      />

      {isPasswordField && (
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-black font-medium"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
};

export default Input;
