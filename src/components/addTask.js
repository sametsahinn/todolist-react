import React from "react";
import '../style.css';
import Add from '../assets/images/add.png';

export default function AddTask(props) {
    return  (
      <>
        <div className="addTaskContainer">
            <img src={Add} alt="icon" style={{width: '24px'}} />
            <p style={{color: '#ccc', margin: '16px', fontSize: '20px', fontWeight: '400'}}>Add a task</p>
        </div>
      </>
    );
  }