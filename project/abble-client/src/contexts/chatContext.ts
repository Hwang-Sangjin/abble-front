import React from 'react';

export interface IChatContextProps {
    message: any,
    setMessage: (message: any) => void,
};

const defaultState: IChatContextProps = {
    message: "",
    setMessage: () => {},
};

export default React.createContext(defaultState);