import { Car, Bike, Auto } from "../../assets";

interface Props {
  vehicleType: string;
}

const VehicleType = ({ vehicleType }: Props) => {
  return (
    <div>
      {!vehicleType ? (
        <img src={Car} alt="Car" className="w-20" />
      ) : (
        <>
          {vehicleType === "car" && (
            <img src={Car} alt="Car" className="w-20" />
          )}
          {vehicleType === "bike" && (
            <img src={Bike} alt="Bike" className="w-20" />
          )}
          {vehicleType === "auto" && (
            <img src={Auto} alt="Auto" className="w-20" />
          )}
        </>
      )}
    </div>
  );
};

export default VehicleType;
