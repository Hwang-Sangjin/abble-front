import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

class SocketService {
  public socket: Socket | null = null;

  // socket.io는 on과 emit의 이벤트 전달로 이루어진다.
  // 그래서 Promise를 통해 각각의 이벤트 딕셔너리를 지정해주는것이 좋다.
  // 결과값에 따라 resolve, reject 메시지를 서버에 전송한다.
  public connect(
    url: string
  ): Promise<Socket<DefaultEventsMap, DefaultEventsMap>> {
    return new Promise((rs, rj) => {
      this.socket = io(url);

      if (!this.socket) return rj();

      this.socket.on("connect", () => {
        rs(this.socket as Socket);
      });

      this.socket.on("connect_error", (err) => {
        console.log("Connection error: ", err);
        rj(err);
      });
    });
  }
}

export default new SocketService(); // 싱글턴