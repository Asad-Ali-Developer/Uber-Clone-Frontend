import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  children: ReactNode;
}

// Protected Route
const UserProtectWrapper = ({ children }: Props) => {
  const userServerToken = localStorage.getItem("serverTokenUser");

  const navigate = useNavigate();

  useEffect(() => {
    if (!userServerToken) {
      navigate("/user/login");
      toast.error("Please login to continue");
    }
  }, [userServerToken]);

  // console.log(isLoggedIn);

  return <div>{children}</div>;
};

export default UserProtectWrapper;
