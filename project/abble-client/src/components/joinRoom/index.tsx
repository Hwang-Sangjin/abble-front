import React, { useContext, useState } from "react";
import gameContext from "../../contexts/gameContext";
import socketService from "../../services/socketService";
import gameService from "../../services/gameService";
import '../../pages/scss/joinRoom.scss'

interface IJoinRoomProps {}

export function JoinRoom(props: IJoinRoomProps) {

    const [isJoining, setjoining] = useState(false);

    const { setInRoom, isInRoom } = useContext(gameContext);

    const joinRoom = async (e: React.FormEvent) => {
        e.preventDefault();
        const socket = socketService.socket;
        if(!socket){
            return;
        }

        setjoining(true);

        const joined = await gameService.joinGameRoom(socket, "defaultRoomName").catch((err) => {
            alert(err);
        });

        if(joined){
            setInRoom(true);
        }

        setjoining(false);
    }

    return <div className="joinRoomContariner">
        <form onSubmit={joinRoom}>
            <h4 className="joinLabel">Join the Game</h4>
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