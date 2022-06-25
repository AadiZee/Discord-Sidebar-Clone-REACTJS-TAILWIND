import React from "react";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import SideBarIcon from "./SideBarIcon";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} text="Fire" />
      <SideBarIcon icon={<BsPlus size="32" />} text="Add New" />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="FAST AF" />
      <SideBarIcon icon={<FaPoo size="20" />} text="POO" />
    </div>
  );
};

export default SideBar;
