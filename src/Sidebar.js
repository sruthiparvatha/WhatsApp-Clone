import React from 'react';
import './Sidebar.css';
import {Avatar, IconButton}from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                  <Avatar src="https://avatars.githubusercontent.com/u/44310675?s=60&v=4"></Avatar>
                </div>
                <div className="sidebar__headerLeft">
                    <IconButton >
                        <ChatIcon />
                    </IconButton>
                    <IconButton >
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>


            </div>
            <div className="sidebar__searchContainer">
                <div className="sidebar__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search or start a new chat"></input>
                </div>
                
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

            
        </div>
    )
}

export default Sidebar
