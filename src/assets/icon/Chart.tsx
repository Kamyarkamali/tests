import { FC } from "react";
import { Ifill } from "../../types/interface";

const Chart: FC<Ifill> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill }}
    >
      <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" />
      <path
        d="M15.5 19.25C13.98 19.25 12.75 18.02 12.75 16.5V7.5C12.75 5.98 13.98 4.75 15.5 4.75C17.02 4.75 18.25 5.98 18.25 7.5V16.5C18.25 18.02 17.02 19.25 15.5 19.25ZM15.5 6.25C14.81 6.25 14.25 6.81 14.25 7.5V16.5C14.25 17.19 14.81 17.75 15.5 17.75C16.19 17.75 16.75 17.19 16.75 16.5V7.5C16.75 6.81 16.19 6.25 15.5 6.25Z"
        fill="white"
      />
      <path d="M8.5 19.25C6.98 19.25 5.75 18.02 5.75 16.5V13C5.75 11.48 6.98 10.25 8.5 10.25C10.02 10.25 11.25 11.48 11.25 13V16.5C11.25 18.02 10.02 19.25 8.5 19.25ZM8.5 11.75C7.81 11.75 7.25 12.31 7.25 13V16.5C7.25 17.19 7.81 17.75 8.5 17.75C9.19 17.75 9.75 17.19 9.75 16.5V13C9.75 12.31 9.19 11.75 8.5 11.75Z" />
    </svg>
  );
};

export default Chart;
