import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../hooks/constant";
import { useUserAuth } from "../../services";
import { toast } from "react-toastify";

const UserLogout = () => {
  const { setAuthenticatedUser } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        const response = await axios.get(`${baseURL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("serverToken")}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          // Remove token and reset user state
          localStorage.removeItem("serverToken");
          setAuthenticatedUser(null);

          // Navigate to login page immediately
          navigate("/user/login", { replace: true });
          toast.success(response.data.message);
        }
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    performLogout();
  }, [navigate, setAuthenticatedUser]);

  return null;
};

export default UserLogout;
