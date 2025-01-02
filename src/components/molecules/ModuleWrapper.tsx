import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ModuleWrapper = ({ children }: Props) => {
  return (
    <div className="absolute z-10 bottom-0 bg-white w-full px-2 py-8 flex flex-col gap-1 rounded-t-xl translate-y-full border-t-2 border-zinc-200">
      {children}
    </div>
  );
};

export default ModuleWrapper;
