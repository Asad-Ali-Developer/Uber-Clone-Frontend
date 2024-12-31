import React, { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  placeholder: string;
  type: string;
  onClick?: () => void;
}

const InputForTrip = forwardRef<HTMLInputElement, InputProps>(
  ({ register, name, placeholder, type, onClick }, ref) => {
    const registration = register(name); // Get register props and ref

    return (
      <div className="relative">
        <input
          {...registration} // Spread the register props
          type={type}
          placeholder={placeholder}
          className={`bg-[#eeeeee] pl-16 pr-5 text-base py-3 rounded-md placeholder:text-sm w-full mb-1 font-medium`}
          ref={(el) => {
            registration.ref(el); // Attach react-hook-form's ref
            if (typeof ref === "function") {
              ref(el); // Forward ref as a function
            } else if (ref) {
              (ref as React.MutableRefObject<HTMLInputElement | null>).current =
                el; // Handle null case
            }
          }}
          onClick={onClick}
        />
      </div>
    );
  }
);

InputForTrip.displayName = "Input";

export default InputForTrip;
