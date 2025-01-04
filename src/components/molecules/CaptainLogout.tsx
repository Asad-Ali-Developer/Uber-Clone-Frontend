import axios from "axios";
import { useEffect } from "react";
import { baseURL } from "../../hooks/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCaptainAuth } from "../../services";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const { setAuthenticatedCaptain } = useCaptainAuth();

  useEffect(() => {
    const performLogout = async () => {
      try {
        const captainToken = localStorage.getItem("serverTokenCaptain");

        const response = await axios.get(`${baseURL}/captains/logout`, {
          headers: {
            Authorization: `Bearer ${captainToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          localStorage.removeItem("serverTokenCaptain");
          navigate("/captain/login", { replace: true });
          setAuthenticatedCaptain(null);
          toast.success(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    performLogout();
  }, [navigate, setAuthenticatedCaptain]);

  return null;
};

export default CaptainLogout;
