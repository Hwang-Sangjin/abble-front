import React from 'react';

export interface IGameContextProps {
    isInRoom: boolean;
    setInRoom: (inRoom: boolean) => void;
    // 각각의 플레이어 양식 여기 정리. 없는 데이터 일단 적어놓음.
    playerAvatar: string | string;
    setPlayerAvatar: (avatar: string)=> void;
    playerMovment: [Number,Number,Number];
    setPlayerMovment: (movement: [0,0,0] | null) => void;
};

const defaultState: IGameContextProps = {
    isInRoom: false,
    setInRoom: () => {},
    // 각각의 플레이어 기본 양식 여기 정리. 없는 데이터 일단 적어놓음.
    playerAvatar: "사슴",
    setPlayerAvatar: () => {},
    playerMovment: [0,0,0],
    setPlayerMovment: () => {},
};

export default React.createContext(defaultState);