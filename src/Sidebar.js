import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
function Sidebar(){
  return(
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Interrupt Coder</h2>
          <h3><FiberManualRecordIcon />
            Ranjan Kumar
          </h3>
        </div>
        <CreateIcon/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
        <SidebarOption/>
      </div>
    </div>
  );
}
export default Sidebar;
 