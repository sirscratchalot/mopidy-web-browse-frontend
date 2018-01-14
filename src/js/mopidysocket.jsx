import React from "react"
import SimpleSocket from "./simple-socket.jsx"
class MopidySocket extends React.Component {
    onmessage(event) {
        var json = JSON.parse(event.data);
        console.log("I got:" + event.data);
        this.state.messages.push(json)
        switch (json.event) {
            case "Resolved":
                this.state.messages[json.info.key]=json.info
                break;
            case "Removed":
                delete this.state.messages[json.info.key]
                break;
            case "Detected":
                break;

        }
    }
    constructor(props) {
        super(props);
        this.state.messages = {};
    }
    render() {
        <SimpleSocket onmessage={this.onmessage} url="/flow"/>
    }

}