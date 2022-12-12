import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import RemitCentre from "../../components/RemitCentre/RemitCentre";
import "./Remit.css";

const Remit = () => {
  return (
    <div className="Profile">
      <ProfileSide/>
      <RemitCentre />
      <RightSide />
    </div>
  );
};

export default Remit;