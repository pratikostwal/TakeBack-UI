import React from "react";
import Topbar from "../TopBar/topbar";
// import GroupButton from "../GroupButton/gropubutton";
import Tabs from "../Tabs/tab";

const Dashboard = () => {
  return (
    <div style={{backgroundColor:"#F7F7FC"}}>
      <Topbar />
      <Tabs />
      {/* <GroupButton /> */}
    </div>
  );
};

export default Dashboard;
