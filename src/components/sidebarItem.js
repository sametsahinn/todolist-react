import React from "react";
import '../style.css';

export default function SidebarItem(props) {
    return  (
      <>
        <div className="sidebarItemContainer">
            <img src={props.icon} alt="icon" />
            <h3>{props.name}</h3>
        </div>
      </>
    );
  }