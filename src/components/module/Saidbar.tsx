import { FC, useContext, useState } from "react";

import logo from "../../assets/images/logo.png";
import logoClose from "../../assets/images/logoclose.png";

import { menuSaidbar } from "../../data/LocalData";
import ArrowLeft from "../../assets/icon/ArrowLeft";
import { Context } from "../../context/ContextProvider";

const Saidbar: FC = () => {
  // context-provider-state
  const { openSaidbar, setOpenSaidbar, hideImages } = useContext(Context);

  const [selected, setselected] = useState<number>(1);

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
            <ul>
              {menuSaidbar.map((item, index) => (
                <div key={item.id}>
                  <div
                    className={`flex justify-center gap-5 items-center mb-[34px]`}
                  >
                    <div className="relative">
                      <li
                        className={openSaidbar ? "ml-0" : "ml-[32px] mr-[24px]"}
                      >
                        {item.icon}
                      </li>
                      <div className={openSaidbar ? "hidden" : "block"}>
                        {item.notif && (
                          <li className="absolute bg-[#FFD008] w-[14px] h-[13px] text-[10px] rounded-[4px] top-[-4px] right-[17px] flex justify-center items-center">
                            {item.notif}
                          </li>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <li
                        className={`text-[14px] text-[#FFF] ${
                          openSaidbar ? "block" : "hidden"
                        }`}
                      >
                        {item.title}
                      </li>
                      <li className={openSaidbar ? "block" : "hidden"}>
                        {item.arrowIcon}
                      </li>
                      {item.notif && (
                        <span
                          className={`bg-[#FFD008] text-[#00017B] ${
                            openSaidbar ? "w-[18px] h-[18px]" : "hidden"
                          } flex ${
                            openSaidbar ? "text-[12px]" : "text-[10px]"
                          } rounded-[4px] justify-center items-center`}
                        >
                          {item.notif}
                        </span>
                      )}
                    </div>
                  </div>
                  {(index + 1) % 3 === 0 &&
                    index !== menuSaidbar.length - 1 && (
                      <div
                        className={` flex justify-center ${
                          openSaidbar ? "ml-0" : "ml-4"
                        }`}
                      >
                        <hr
                          className={`border-t mb-[32px] border-gray-500 my-4 w-full ${
                            openSaidbar ? "w-full" : "w-[32px] mr-[20px]"
                          }`}
                        />
                      </div>
                    )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saidbar;
