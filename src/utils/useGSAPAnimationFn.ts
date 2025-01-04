import { useGSAP } from "@gsap/react";
import gsap from "gsap"; 
import { RefObject } from "react";

type ModalProps = {
  modalState: boolean;
  modalRef: RefObject<HTMLDivElement | null>;
};

const useGSAPAnimationFn = ({ modalState, modalRef }: ModalProps) => {
  useGSAP(() => {
    // Check if modalRef.current is not null before attempting animation
    if (modalRef.current) {
      if (modalState) {
        gsap.to(modalRef.current, {
          y: 0,
        });
      } else {
        gsap.to(modalRef.current, {
          y: "100%",
        });
      }
    }
  }, [modalState]);  // Dependencies should be passed within the function
};

export default useGSAPAnimationFn;
