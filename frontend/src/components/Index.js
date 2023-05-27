import React from "react";
import "../css/Index.css";
import GetStarted from "./GetStarted";
import Profile from "./Profile";
import AdminPanel from "./AdminPanel";

const Index = () => {
  return (
    <>
      <div className="index-main-container">
        <div className="index-wrapper">
          {/* <Profile></Profile>

          <GetStarted></GetStarted> */}
          <AdminPanel></AdminPanel>
         
        </div>
      </div>
    </>
  );
};

export default Index;
