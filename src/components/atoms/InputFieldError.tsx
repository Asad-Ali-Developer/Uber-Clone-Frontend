interface InputFieldErrorProps {
  errors: any;
}

const InputFieldError = ({ errors }: InputFieldErrorProps) => {
  return (
    <div>
      <p className="text-red-500 text-sm font-medium mb-2">
        {errors}
      </p>
    </div>
  );
};

export default InputFieldError;
