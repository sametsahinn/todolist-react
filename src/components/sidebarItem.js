import React from "react";
import '../style.css';

export default function SidebarItem(props) {
    return  (
      <>
        <div className="sidebarItemContainer">
            <img src={props.icon} alt="icon" style={{width: '20px', margin: '8px 16px'}} />
            <h3>{props.name}</h3>
        </div>
      </>
    );
  }