
import React from "react"
class SimpleSocket extends React.Component{
    buildUrl(url){
        if(url.startsWith("ws://")||url.startsWith("wss://")){
            return url;
        }
        const location = window.location;
        const start = location.scheme === "https:" ? "wss" : "ws";
        return start + location.host + (url.startsWith("/") ? "" :"/")+url;
    }
	constructor(props) {
        super(props)
        this.state={};
    }
    componentDidMount(){
        let socket = new WebSocket(this.buildUrl(this.props.url));
        socket.onmessage = this.props.onmessage
        this.setState({
            socket:socket
        });
    }
    render(){
        return <span className="SocketSpan"></span>
    }
    
}
export default SimpleSocket;