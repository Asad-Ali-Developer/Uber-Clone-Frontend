import { Link } from "react-router-dom";

interface LinkButtonProps {
  text: string;
  link: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  tailwaindBgColor?: string;
}

// #10b461

const LinkButton = ({
  text,
  link,
  onClick,
  bgColor,
  textColor,
  tailwaindBgColor,
}: LinkButtonProps) => {
  return (
    <Link
      to={link}
      onClick={onClick}
      style={{ color: textColor, backgroundColor: bgColor }}
      className={`${tailwaindBgColor} text-center font-medium py-3 px-4 w-full rounded-md mb-2`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
