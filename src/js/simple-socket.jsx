
import React from "react"
class SimpleSocket extends React.Component{
	constructor(props) {
        super(props)
        enableSocket(this.props.url)
    }
    render(){
        return <span class="SocketSpan" id={this.props.id}></span>
    }
    
    enableSocket(url){
        this.state.websocket =  new WebSocket(url);
        this.state.websocket.onmessage = this.props.onmessage
    }
}
export default SimpleSocket;