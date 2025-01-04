import { Dispatch, SetStateAction } from "react";

interface Props {
  setRidePopupModal: Dispatch<SetStateAction<boolean>>;
  setConfirmRidePopupModal: Dispatch<SetStateAction<boolean>>;
}

const ConfirmRidePopupModal = ({setRidePopupModal}: Props) => {
  return <div onClick={() => setRidePopupModal(false)}>ConfirmRidePopupModal</div>;
};

export default ConfirmRidePopupModal;
