import React from "react"
import SimpleSocket from "./simple-socket.jsx"
const MopidySocket = ({onmessage}) =>  (
        <SimpleSocket onmessage={onmessage} url="ws://localhost:9000/flow" />
);
export default MopidySocket;