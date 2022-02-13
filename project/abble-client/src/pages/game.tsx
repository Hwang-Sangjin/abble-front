import React, { useState } from 'react'
// import GameSection from '../components/gameSection'
import {Game} from '../components/game';
import { JoinRoom } from '../components/joinRoom';
import GameContext, { IGameContextProps } from "../contexts/gameContext";



const GamePage = () => {

  const [isInRoom, setInRoom] = useState(false);
  // 아바타 만들고 구현해야될거. 없는 데이터 일단 적어놨음.
  const [playerAvatar, setPlayerAvatar] = useState<any>("사슴");
  const [playerMovment, setPlayerMovment] = useState<any>([0,0,0]);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom,
    playerAvatar,
    setPlayerAvatar,
    playerMovment,
    setPlayerMovment,
  }

  return (
    // <GameSection/>
    <GameContext.Provider value={gameContextValue}>    
      {isInRoom ? <Game/> : <JoinRoom/>}
    </GameContext.Provider>
  )
}

export default GamePage