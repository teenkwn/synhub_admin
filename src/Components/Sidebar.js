import React from "react";
import "./Sidebar.css";
import {Link} from 'react-router-dom';
import app from '../Firebase/config';

function Sidebar() {
  return (
    <div className="Sidebar-root">
       <div className="Sidebar-root-realtime">
           <div>Time: ....</div>
           <div>Date: ...</div>
       </div>
       <div className="Sidebar-root-userinfo">
           <div className="Sidebar-root-userinfo-pic"></div>
           <div className="Sidebar-root-userinfo-name">
                <div>User name</div>
                <div className="Sidebar-root-userinfo-name-sub">Lorem Ipsum</div>
           </div>
       </div>
       <div className="Sidebar-root-all">
            <Link to="/">
              <div className="Sidebar-root-all-dashboard">Dashboard</div>
            </Link>
            <Link to="/userlist">
              <div className="Sidebar-root-all-timeattendace">User List</div>
            </Link>
       </div>
        <div className="logout" onClick={() => app.auth().signOut()}>Log Out</div>
    </div>
  );
}

export default Sidebar;
;
