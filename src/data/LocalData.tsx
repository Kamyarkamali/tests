import { ImenuNavbar, Isaidbar } from "../types/interface";

import imageArrowDown from "../assets/icon/arrow-down.svg";

// icons
import AddBesi from "../assets/icon/AddBesi";
import ArrowDown from "../assets/icon/ArrowDown";
import Chart from "../assets/icon/Chart";
import ClipBoard from "../assets/icon/ClipBoard";
import HomeIcon from "../assets/icon/HomeIcon";
import Inbox from "../assets/icon/Inbox";
import LogOut from "../assets/icon/LogOut";
import Priching from "../assets/icon/Priching";
import Profile from "../assets/icon/Profile";
import Support from "../assets/icon/Support";
import Supports from "../assets/icon/Supports";
import Team from "../assets/icon/Team";

export const menuNavbar: ImenuNavbar[] = [
  { id: 1, icon: imageArrowDown, image: "dr", title: "Dr,Shafiee.Official" },
];

export const menuSaidbar: Isaidbar[] = [
  { id: 1, icon: <HomeIcon fill="white" />, title: "Dashboard", paths: "/" },
  {
    id: 2,
    icon: <Chart fill="white" />,
    title: "Analysis",
    paths: "/",
    arrowIcon: <ArrowDown fill="white" />,
  },
  {
    id: 3,
    icon: <ClipBoard fill="white" />,
    title: "Reports",
    paths: "/",
    notif: 8,
  },
  { id: 4, icon: <AddBesi fill="white" />, title: "Add Business", paths: "/" },
  { id: 5, icon: <Priching fill="white" />, title: "Priching", paths: "/" },
  { id: 6, icon: <Inbox fill="white" />, title: "inbox", paths: "/", notif: 8 },
  { id: 7, icon: <Profile fill="white" />, title: "Profile", paths: "/" },
  {
    id: 8,
    icon: <Team fill="white" />,
    title: "Team",
    paths: "/",
    arrowIcon: <ArrowDown fill="white" />,
  },

  { id: 9, icon: <Support fill="white" />, title: "Support", paths: "/" },

  { id: 10, icon: <Supports fill="white" />, paths: "/", title: "Settings" },

  { id: 11, icon: <LogOut fill="white" />, paths: "/", title: "Log out" },
];
