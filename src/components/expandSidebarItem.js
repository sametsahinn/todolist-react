import {React, useState, useContext} from "react";
import '../style.css';
import Add from '../assets/images/add.png';
import Arrow from '../assets/images/arrow.png';

export default function ExpandSidebarItem(props) {
    const [active, setActive] = useState(false);

    function handleActivate(){
        setActive(!active);
    }

    return  (
      <>
        <div className="outerContainer" style={{background: active && '#f5f5f5' }}>
            <div className="outerContainerMain" style={{background: active && '#f5f5f5' }} >
                <img src={props.icon} alt="icon" style={{width: '20px', margin: '8px 16px'}} />
                <h3>{props.name}</h3>
                <img src={Arrow} alt="icon" style={{width: '14px', margin: '4px 24px', transform: active && 'rotate(180deg)'}} />
            </div>
            <div className="catArea" style={{display: !active && 'none' }}>

                <div className="addArea">
                    <img src={Add} alt="icon" style={{height: '16px'}} />
                    <p style={{color: '#ccc', marginLeft: '8px', fontSize: '16px', fontWeight: '400'}}>Add new</p>
                </div>
            </div>
        </div>
      </>
    );
  }