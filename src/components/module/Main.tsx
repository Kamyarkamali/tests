import { FC, useContext, useEffect } from "react";
import Notification from "../../components/module/Notification";
import { Context } from "../../context/ContextProvider";

const Main: FC = () => {
  const { setHideImages, openSaidbar } = useContext(Context);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setHideImages(scrollTop < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHideImages]);

  return (
    <div
      className={`w-[1300px] ml-[7.3rem] ${
        openSaidbar ? "w-[1197px]" : "w-[1200px]"
      } mx-auto h-[900px] bg-[#FFFF] flex justify-center rounded-tl-[30px]`}
    >
      <div>1</div>

      <div>2</div>

      <div>3</div>
    </div>
  );
};

export default Main;
