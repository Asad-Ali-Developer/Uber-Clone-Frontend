import { Car, Bike, Auto } from "../../assets";

interface Props {
  vehicleType: string;
  width?: string;
  marginTop?: string;
}

const VehicleType = ({ vehicleType, width, marginTop }: Props) => {
  return (
    <div>
      {!vehicleType ? (
        <img src={Car} alt="Car" className="w-20 -mt-10" />
      ) : (
        <>
          {vehicleType === "car" && (
            <img
              src={Car}
              alt="Car"
              className={`${width ? width : "w-20"} ${marginTop && "-mt-10"}`}
            />
          )}
          {vehicleType === "bike" && (
            <img
              src={Bike}
              alt="Bike"
              className={`${width ? width : "w-20"} ${marginTop && "-mt-10"}`}
            />
          )}
          {vehicleType === "auto" && (
            <img
              src={Auto}
              alt="Auto"
              className={`${width ? width : "w-20"} ${marginTop && "-mt-10"}`}
            />
          )}
        </>
      )}
    </div>
  );
};

export default VehicleType;
