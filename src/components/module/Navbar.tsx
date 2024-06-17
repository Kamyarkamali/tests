import { FC } from "react";

//image
import imageDr from "../../assets/images/dr.webp.jpg";
import american from "../../assets/images/image1.png";

//icon
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar: FC = () => {
  return (
    <div className="bg-[#00017B] gap-5 max-w-[1500px] h-[64px] mt-[-2px] flex items-center justify-end">
      <div className="absolute  right-[19rem] top-[1.3rem]">
        <IoMdNotificationsOutline className="bell" size={22} color="white" />

        <div className="absolute w-[14px] flex justify-center top-[-3px] right-[-4px] h-[14px] bg-[#FFD008] clip-path rounded-[100%]">
          <span className="text-[9px]">12</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <img
          className="w-[21px] h-[21px] rounded-full border"
          src={american}
          alt="/"
        />
        <MdKeyboardArrowDown color="white" size={16} />
      </div>

      <div className="border-r-[1px] w-[0.10px] opacity-60 h-[20px] bg-slate-700"></div>
      {/* track */}
      <div>
        <span className="text-[11px] text-[#ffff]">Dr.Shafiee.Official</span>
      </div>

      <div className="flex items-center gap-2 mr-9">
        <img
          className="w-[36px] h-[36px] rounded-[100%] object-cover"
          src={imageDr}
          alt="/"
        />
        <MdKeyboardArrowDown color="white" size={16} />
      </div>
    </div>
  );
};

export default Navbar;
