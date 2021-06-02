import { FC } from "react";

interface MyProps {
  title: string;
  imageUrl: string;
}

export const Tool: FC<MyProps> = ({ title, children, imageUrl }) => {
  return (
    <div className="bg-green-chia-dark4 rounded-lg flex flex-col p-5">
      <div className="flex">
        <img className="w-18 mb-5 self-center" src={imageUrl} />
      </div>

      <span className="font-gibson-light text-1xl mb-5">{title}</span>
      <span className="font-gibson-light text-green-chia-dark1 text-sm">{children}</span>
    </div>
  );
};

export default Tool;
