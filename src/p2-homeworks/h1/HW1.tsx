import React from 'react'
import Message from "./Message";
export const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    message: 'some text',
    // time: '22:00',
    // name: 'Some Name',
}



function HW1() {

    return (
        <div>
            <hr/>
            <Message avatar={messageData.avatar} message={messageData.message}
                // name={messageData.name}
                // time={messageData.time}
            />
            <hr/>
        </div>
    );
}

export default HW1;
