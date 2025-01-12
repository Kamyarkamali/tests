import { FC } from "react";
import { Ifill } from "../../types/interface";

const ArrowDown: FC<Ifill> = ({ fill }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill }}
    >
      <path d="M7.00001 9.8C6.59168 9.8 6.18334 9.6425 5.87418 9.33333L2.07084 5.53C1.90168 5.36083 1.90168 5.08083 2.07084 4.91167C2.24001 4.7425 2.52001 4.7425 2.68918 4.91167L6.49251 8.715C6.77251 8.995 7.22751 8.995 7.50751 8.715L11.3108 4.91167C11.48 4.7425 11.76 4.7425 11.9292 4.91167C12.0983 5.08083 12.0983 5.36083 11.9292 5.53L8.12584 9.33333C7.81668 9.6425 7.40834 9.8 7.00001 9.8Z" />
    </svg>
  );
};

export default ArrowDown;
