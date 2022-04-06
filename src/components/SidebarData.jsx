import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Temperature Data",
    path: "/Tempereture-data",
    icon: <FaIcons.FaTemperatureHigh />,
    // icon: <IoIcons.IoIosThermometer />,
    cName: "nav-text",
  },
  {
    title: "Oxygen Data",
    path: "/Oxygen-data",
    icon: <FaIcons.FaHeartbeat />,
    cName: "nav-text",
  },
  {
    title: "Pulse Data",
    path: "/Pulse-data",
    icon: <IoIcons.IoMdPulse />,
    cName: "nav-text",
  },
  {
    title: "ECG Data",
    path: "/ECG-data",
    icon: <RiIcons.RiHeartPulseFill />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Log Out",
    path: "/",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text",
  },
];
