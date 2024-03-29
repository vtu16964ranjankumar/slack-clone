import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import db from "./firebase";
function Sidebar(){
  const[channels, setChannels]= useState([])
  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    ));
  }, []);
  
  return(
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Interrupt Coder</h2>
          <h3><FiberManualRecordIcon />
            Ranjan Kumar
          </h3>
          <CreateIcon/>
        </div>
        
        <SidebarOption Icon ={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon ={InboxIcon} title="Mention & reactions"/>
        <SidebarOption Icon ={DraftsIcon} title="Saved items"/>
        <SidebarOption Icon ={BookmarkBorderIcon} title="Channel browser"/>
        <SidebarOption Icon ={PeopleAltIcon} title="People & user groups"/>
        <SidebarOption Icon ={AppsIcon} title="Apps"/>
        <SidebarOption Icon ={FileCopyIcon} title="File browser"/>
        <SidebarOption Icon ={ExpandLessIcon} title="Show less"/>
        <SidebarOption Icon ={ExpandMoreIcon} title="Channel"/>
        
        <SidebarOption Icon ={AddIcon} addChannelOption title="Add Channel" />
        {channels.map(channels=>(
          <SidebarOption title = {channels.name} id={channels.id} />
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
 