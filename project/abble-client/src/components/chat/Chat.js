import React, { useContext, useEffect, useRef, useState } from 'react'
import { Html } from "@react-three/drei";
import {Socket, io} from 'socket.io-client';
import chatService from '../../services/chatService'
import socketService from '../../services/socketService';
import chatContext from '../../contexts/chatContext';

// Sending data
// 1. 클라이언트->서버 : socket.emit(event, data)
// 2. 서버->클라이언트(다수 접속시 broadcast) : socket.broadcast.emit(event, data)
// 3. io.emit(event, data)

export const Chat = () => {
    const ref = useRef();
    // const { message, setMessage } = useContext(chatContext);
    const [message, setMessage] = useState("");

    const handleChange = ({target: {value}}) => setMessage(value);

    let messageList = [];

    const ChatListGen = (message) => {
        console.log(messageList);
        return (
            <li>{message}</li>
        )
    }

    const updateChat = (message) => {
        if(socketService.socket){
            chatService.onChatMessage(socketService.socket,  (message) => {
                setMessage(message);
            });
        }
    }
    
    useEffect(() => {
        console.log("Effect : ", message);
        updateChat(message);
    }, [message])


    return (
        <Html>
            <ul className="messagesList">
                {ChatListGen(message)}
            </ul>
            <form 
                ref={ref}
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    chatService.chatMessage(socketService.socket, message);
                    // setMessage("");
                    return false;
                }}
            >
                <input 
                    className="messageInput" 
                    autoComplete="off" 
                    value={message}
                    onChange={handleChange}
                />
                <button>Send</button>
            </form>
        </Html>
    )
}