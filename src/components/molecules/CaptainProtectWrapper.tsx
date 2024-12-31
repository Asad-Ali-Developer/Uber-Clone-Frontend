import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  children: ReactNode;
}

const CaptainProtectWrapper = ({ children }: Props) => {
  const captainServerToken = localStorage.getItem("serverTokenCaptain");

  const navigate = useNavigate();

  useEffect(() => {
    if (!captainServerToken) {
      navigate("/captain/login");
      toast.error("Please login to continue");
    }
  }, [captainServerToken]);

  return <div>{children}</div>;
};

export default CaptainProtectWrapper;
