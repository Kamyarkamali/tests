import { FC, useContext, useState } from "react";

import logo from "../../assets/images/logo.png";
import logoClose from "../../assets/images/logoclose.png";

import { menuSaidbar } from "../../data/LocalData";
import ArrowLeft from "../../assets/icon/ArrowLeft";
import { Context } from "../../context/ContextProvider";

import { motion } from "framer-motion";

const Saidbar: FC = () => {
  // context-provider-state
  const { openSaidbar, setOpenSaidbar, hideImages } = useContext(Context);

  const [selected, setselected] = useState<boolean>(false);

  return (
    <div className="fixed left-0 top-0 ">
      <div className="h-screen bg-[#00017B] transition-all duration-300 ease-in overflow-y-auto sidebar-content flex flex-col items-center">
        <div
          onClick={() => setOpenSaidbar(!openSaidbar)}
          className={`fixed z-50 cursor-pointer top-[24.5rem]  ${
            openSaidbar ? "left-[11.9rem]" : "left-[3rem]"
          } cursor-pointer right-0 rounded-full bg-[#00017B] w-[43px] h-[42px] flex flex-col items-center justify-center `}
        >
          <div
            className={`cursor-pointer ${
              openSaidbar ? "rotate-180" : "rotate-0"
            }`}
          >
            <ArrowLeft />
          </div>
        </div>

        <div className={`relative ${openSaidbar ? "w-[224px]" : "w-[80px]"}`}>
          <div className="flex justify-center bg-[#00017B] w-full">
            {hideImages && (
              <img
                className={
                  openSaidbar
                    ? "w-[115px] object-cover mt-[17px] mb-[48px] h-[74px]"
                    : "w-[51px] mt-[52px] mb-[56px] mr-[20px] ml-[19.73px] h-[40px] rounded-lg"
                }
                src={openSaidbar ? logo : logoClose}
                alt="logo"
              />
            )}
          </div>

          <div className="flex justify-center">
            <ul className="flex flex-col gap-0">
              <div className="w-[200px] ml-6 bg-[#00017B] rounded-lg p-1">
                <li>1</li>
              </div>
              <div className="w-[200px] ml-6 bg-white p-1 rounded-l-full">
                <li>1</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saidbar;
