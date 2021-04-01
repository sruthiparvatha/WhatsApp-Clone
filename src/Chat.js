import React from 'react'
import {Avatar, IconButton}from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import './Chat.css';


function Chat() {
    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                <IconButton >
                    <VideocamOutlinedIcon />
                </IconButton>
                <IconButton >
                    <CallOutlinedIcon />
                </IconButton>
                <IconButton >
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Sruthi </span>
                    This is a message. 
                    <span className="chat__timestamp"> {new Date().toUTCString()} </span>
                </p>

                <p className="chat__message chat__receiver">
                    <span className="chat__name">Sruthi </span>
                    This is a message. 
                    <span className="chat__timestamp"> {new Date().toUTCString()} </span>
                </p>

                
            </div> 

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <AttachFileIcon />
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit">Send a message</button>
                </form> 
                <MicNoneOutlinedIcon />

            </div>

        </div>
    )
}

export default Chat
