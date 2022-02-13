import { IPlayMovement } from './../../components/game/index';
import { Socket } from 'socket.io-client';

// on과 emit 어렵게 생각할거 없음.
// emit으로 송신한 정보를 on으로 받는거.
// 즉 socket.emit은 보내는거,
// socket.on은 받는거.
class GameService {
    public async joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
        return new Promise((rs, rj) => {
            socket.emit("join_game", { roomId });
            socket.on("room_joined", () => rs(true));
            socket.on("room_join_error", ({ error }) => rj(error));
        })
    }

    public async updateGame(socket: Socket, playerPosition: IPlayMovement){
        socket.emit("update_game", { movement: playerPosition });
    }

    public async onGameUpdate(socket: Socket, listener: (movement: IPlayMovement) => void){
        socket.on("on_game_update", ({movement}) => listener(movement));
    }
}

export default new GameService();