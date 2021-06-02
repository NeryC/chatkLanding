import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface MyProps {
  icon: IconDefinition;
  value: string;
  text: string;
}

const StatsItem: FC<MyProps> = ({ icon, value, text }) => {
  return (
    <div className="text-lg flex flex-col sm:flex-row items-center mb-5 ">
      <FontAwesomeIcon
        size="3x"
        icon={icon}
        className="sm:mx-4 p-1 text-white"
      />
      <div className="flex flex-col items-center sm:items-start">
        <div className="text-xl text-green-chia-lime">{value}</div>
        <div className="text-sm text-green-chia-dark1">{text}</div>
      </div>
    </div>
  );
};

export default StatsItem;
