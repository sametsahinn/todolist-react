import {React, useState, useContext} from "react";
import '../style.css';
import SidebarItem from '../components/sidebarItem';
import ExpandSidebarItem from '../components/expandSidebarItem';
import FilterTag from '../components/filterTag';
import AddTask from '../components/addTask';
import Logo from '../assets/images/logo.png';
import TaskFill from '../assets/images/taskFill.png';
import Settings from '../assets/images/settings.png';
import Folder from '../assets/images/folder.png';
import Filter from '../assets/images/filter.png';

export function Home() {
    const [allActive, setAllActive] = useState(true);
    const [doneActive, setDoneActive] = useState(false);
    const [notDoneActive, setNotDoneActive] = useState(false);

    function handleAll(){
        setAllActive(true);
        setDoneActive(false);
        setNotDoneActive(false);
    };

    function handleDone(){
        setAllActive(false);
        setDoneActive(true);
        setNotDoneActive(false);
    };
    function handleNotDone(){
        setAllActive(false);
        setDoneActive(false);
        setNotDoneActive(true);
    };

  return  (
    <>
        <div className="page"> 
            <div className="sidebar">
                <img src={Logo} alt="logo" style={{ width: '170px', margin: '32px' }} />
                <div className="tabs">
                    <SidebarItem icon={TaskFill} name="Tasks" isActive={true} ></SidebarItem>
                    <ExpandSidebarItem icon={Folder} name="Categories" ></ExpandSidebarItem>
                    <SidebarItem icon={Settings} name="Settings" isActive={false} ></SidebarItem>
                </div>                
            </div>
            <div className="main">
                <div className="header">ToDo List</div>
                <div className="titleAndFilter">
                    <div className="title">Tasks</div>
                    <div className="filterField">
                        <div onClick={handleAll}><FilterTag name="All" active={allActive}/></div>
                        <div onClick={handleDone}><FilterTag name="Done" active={doneActive}/></div>
                        <div onClick={handleNotDone}><FilterTag name="Not done" active={notDoneActive}/></div>
                        <img src={Filter} alt="icon" style={{height: '20px', margin: '4px 8px'}} />
                    </div>
                </div>
                <AddTask></AddTask>
            </div>
            
        </div> 
    </>
  );
}