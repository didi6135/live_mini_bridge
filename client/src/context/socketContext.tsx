import { io } from "socket.io-client";
import { SOCKET_URL } from "../config/defualt";
import { createContext, useContext } from "react";


const socket = io(SOCKET_URL);


const SocketContext = createContext({socket})


const SocketProvider = (props: any) => {

    return <>
    <SocketContext.Provider
    value={{socket}}

    {...props}
    />
    </>
}

export const useSockets = () => useContext(SocketContext);

export default SocketProvider