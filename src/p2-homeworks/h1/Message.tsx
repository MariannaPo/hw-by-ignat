import React from 'react'
import "./HW1";
import {messageData} from "./HW1";

type MessageTypeProps = {
    avatar: string,
    message: string,
    time: string,
    name: string,
    typer: Array<profilePicturePropsType>
}

function Message(props: MessageTypeProps) {
    return (
        <>
            <ProfilePicture avatar={props.avatar}/>
            <MessageWindow message={props.message}/>
            <DataTime time={props.time}/>
            <UserName name={props.name}/>

        </>
    )
}

type profilePicturePropsType = {
    avatar: typeof messageData["avatar"],
    message: typeof messageData['message'],
    time: typeof messageData['time'],
    name: typeof messageData['name'],
}

function ProfilePicture(props: profilePicturePropsType) {
    const avaStyle = {
        width: '100px',
        height: '100px',
        border: '2px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        padding: '2px',
    }
    return (
        <div>
            <img src={props.avatar} style={avaStyle} alt={'profile'}/>
        </div>
    )
}

function MessageWindow(props: profilePicturePropsType) {

    return (
        <pre>{props.message}</pre>
    )
}

function DataTime(props: profilePicturePropsType) {

    return (
        <div>
            <pre>{props.time}</pre>
        </div>
    )
}

function UserName(props: profilePicturePropsType) {
    return (
        <div>
            <pre>{props.name}</pre>
        </div>
    )
}

export default Message;