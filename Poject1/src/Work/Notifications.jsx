import React from "react";
import MenuBar from "../pages/Check/MenuBar";
import Nav_bar_Sign from "../pages/parts/nav_bar_Sign";
import Notification_one_tag from "../pages/Check/Notification_one_tag";

const NotificationsP = () => {
  
  return (
    <>
    <Nav_bar_Sign/>
    <div className="d-flex">
      <MenuBar/>
      <Notification_one_tag/>
    </div>
    </>
  );
};

export default NotificationsP;
