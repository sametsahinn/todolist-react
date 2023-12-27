import React from 'react';
import '../style.css';
import Logo from '../logo.svg';
import SidebarItem from '../components/sidebarItem';

export function Home() {
  return  (
    <>
        <div className="page"> 
            <div className="sidebar">
                <img src={Logo} alt="logo" style={{ width: '50px', margin: '32px' }} />
                <div className="tabs">
                    
                </div>                
            </div>
            <div className="main">
                <div className="header"></div>
                <div className="titleAndFilter">
                    <div className="title">Tasks</div>
                    <div className="filterField">
                        <div>All</div>
                        <div>Done</div>
                        <div>Not Done</div>
                    </div>
                </div>
            </div>
            
        </div> 
    </>
  );
}