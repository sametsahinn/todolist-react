import React from "react";
import '../style.css';

export default function FilterTag(props) {
    return  (
      <>
        <div className="containerFilterTag" style={{background: props.active && 'white', border: props.active && '0', boxShadow: props.active && '0 1px 2px #ccc' }}>            
            <h3 style={{fontSize: '16px', color: props.active ? '#333' : '#ccc'}} >{props.name}</h3>
        </div>
      </>
    );
  }