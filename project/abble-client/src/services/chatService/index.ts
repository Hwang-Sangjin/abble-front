import { Socket } from 'socket.io-client';

class ChatService {
    public async chatMessage(socket: Socket, message: any){
        socket.emit('chat_message', {message: message});
        console.log("chat message : ", message);
    }

    public async onChatMessage(socket: Socket, message: any){
        socket.on('on_chat_message', message);
        console.log('chat recieve');
    }
    // public async joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
    //     return new Promise((rs, rj) => {
    //         socket.emit("join_game", { roomId });
    //         socket.on("room_joined", () => rs(true));
    //         socket.on("room_join_error", ({ error }) => rj(error));
    //     })
    // }

    // public async updateAvatar(socket: Socket, playerAvatar: string){
    //     socket.emit("update_avatar", { avatar: playerAvatar});
    //     console.log(`Client Update Avatar : ${playerAvatar}`);
    // }

    // public async onAvatar(socket: Socket, avatar: any) {
    //     socket.on("on_avatar", avatar);
    //     console.log("onAvatar : " + avatar);
    // }

    // public async updateGame(socket: Socket, playerPosition: [number, Number, Number]){
    //     socket.emit("update_game", { position: playerPosition });
    // }

    // public async onGameUpdate(socket: Socket, listener: (position: [number, Number, Number]) => void){
    //     socket.on("on_game_update", ({position}) => listener(position));
    // }
}

export default new ChatService();