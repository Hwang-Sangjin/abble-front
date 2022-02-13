import React, { useContext, useState } from "react";
import gameContext from "../../contexts/gameContext";
import socketService from "../../services/socketService";
import gameService from "../../services/gameService";

interface IJoinRoomProps {}

export function JoinRoom(props: IJoinRoomProps) {

    const [roomName, setRoomName] = useState("");
    const [isJoining, setjoining] = useState(false);

    const { setInRoom, isInRoom } = useContext(gameContext);

    const handleRoomNameChange = (e: React.ChangeEvent<any>) => {
        const value = e.target.value;
        setRoomName(value);
    }

    const joinRoom = async (e: React.FormEvent) => {
        e.preventDefault();
        const socket = socketService.socket;
        if(!roomName || roomName.trim() === "" || !socket){
            return;
        }

        setjoining(true);

        const joined = await gameService.joinGameRoom(socket, roomName).catch((err) => {
            alert(err);
        });

        if(joined){
            setInRoom(true);
        }

        setjoining(false);
    }

    return <div className="joinRoomContariner">
        <form onSubmit={joinRoom}>
            <h4 className="joinLabel">Enter Room ID to Join the Game</h4>
            <input 
                className="roomIdInput"
                placeholder="Room ID"
                value={roomName}
                onChange={handleRoomNameChange}
            />
            <button 
                className="joinButton"
                type="submit" 
                disabled={isJoining}
            >
                {isJoining ? "Joining..." : "Joing"}
            </button>
        </form>
    </div>
}