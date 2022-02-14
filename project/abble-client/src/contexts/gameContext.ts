import React from 'react';

export interface IGameContextProps {
    isInRoom: boolean;
    setInRoom: (inRoom: boolean) => void;
    playerPosition: [number,number,number];
    setPlayerPosition: (position: [number,number,number]) => void;
    playerAvatar: string;
    setPlayerAvatar: (avatar: string) => void;
};

const defaultState: IGameContextProps = {
    isInRoom: false,
    setInRoom: () => {},
    playerPosition: [0,0,0],
    setPlayerPosition: () => {},
    playerAvatar: "cube",
    setPlayerAvatar: () => {},
};

export default React.createContext(defaultState);