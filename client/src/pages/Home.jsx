import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import CenterPortion from "../components/CenterPortion/CenterPortion";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <CenterPortion />
      <RightSide />
    </div>
  );
};

export default Home;
