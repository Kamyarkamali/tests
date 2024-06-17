import { FC } from "react";
import { Ifill } from "../../types/interface";

const ClipBoard: FC<Ifill> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill }}
    >
      <path d="M15 12.95H8C7.59 12.95 7.25 12.61 7.25 12.2C7.25 11.79 7.59 11.45 8 11.45H15C15.41 11.45 15.75 11.79 15.75 12.2C15.75 12.61 15.41 12.95 15 12.95Z" />
      <path d="M12.38 16.95H8C7.59 16.95 7.25 16.61 7.25 16.2C7.25 15.79 7.59 15.45 8 15.45H12.38C12.79 15.45 13.13 15.79 13.13 16.2C13.13 16.61 12.79 16.95 12.38 16.95Z" />
      <path d="M14 6.75H10C9.04 6.75 7.25 6.75 7.25 4C7.25 1.25 9.04 1.25 10 1.25H14C14.96 1.25 16.75 1.25 16.75 4C16.75 4.96 16.75 6.75 14 6.75ZM10 2.75C9.01 2.75 8.75 2.75 8.75 4C8.75 5.25 9.01 5.25 10 5.25H14C15.25 5.25 15.25 4.99 15.25 4C15.25 2.75 14.99 2.75 14 2.75H10Z" />
      <path d="M15 22.75H9C3.38 22.75 2.25 20.17 2.25 16V10C2.25 5.44 3.9 3.49 7.96 3.28C8.36 3.26 8.73 3.57 8.75 3.99C8.77 4.41 8.45 4.75 8.04 4.77C5.2 4.93 3.75 5.78 3.75 10V16C3.75 19.7 4.48 21.25 9 21.25H15C19.52 21.25 20.25 19.7 20.25 16V10C20.25 5.78 18.8 4.93 15.96 4.77C15.55 4.75 15.23 4.39 15.25 3.98C15.27 3.57 15.63 3.25 16.04 3.27C20.1 3.49 21.75 5.44 21.75 9.99V15.99C21.75 20.17 20.62 22.75 15 22.75Z" />
    </svg>
  );
};

export default ClipBoard;