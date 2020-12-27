import React from "react";
import "./Sidebar.css";
import {Link} from 'react-router-dom';
import app from '../Firebase/config';
import LogoSyn from '../Assets/synhub-logo.png'

function Sidebar() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  return (
    <div className="Sidebar-root">
       <div className="Sidebar-root-realtime">
           <div>Date: {date}</div>
       </div>
       <div className="Sidebar-root-userinfo">
           <img src={LogoSyn} className="logo-size"></img>
           <div className="Sidebar-root-userinfo-name">
                <div>Syn Hub</div>
                <div className="Sidebar-root-userinfo-name-sub">Marketing</div>
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
