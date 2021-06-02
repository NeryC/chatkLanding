import { FC } from "react";

interface MyProps {
  children: any;
}

const Title: FC<MyProps> = ({ children }) => {
  return (
    <div className="pt-3 text-4xl sm:text-3.5xl font-bold font-gibson-light ">
      {children}
    </div>
  );
};

export default Title;
