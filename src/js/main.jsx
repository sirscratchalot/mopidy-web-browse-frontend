import React from 'react';
import ReactDOM from 'react-dom';
import MopidyList from './components/mopidylist.jsx';
import MopidySocket from './mopidysocket.jsx';
import FrameView from './components/frameview.jsx';
import Config from '../config.jsx';
import main from "../sass/main.scss";
const fakeData = {
	name: "MopidyOne",
	url: "http://urlOne",
	key: "fakeKeyIam",
	type: "_mopidy-http._tcp.local.",
	port: 6680,
	urls: ["http://localhost:6680"],
	httpEnabled: true,
	defaultGui: "GUI-One",
	identifier: "http://urlOne:6680"
};
/**
 * 
 */
class Main extends React.Component {

	onLinkClick(link) {
		this.setState({ link: link })
	}
	onMessage(event) {
		var json = JSON.parse(event.data);
		console.log("I got:" + event.data);
		var tmp = this.state.info.slice();
		switch (json.event) {
			case "Resolved":
				this.setState(
					{ info: this.state.info.concat([json.info]) }
				);
				break;
			case "Removed":
				this.setState({
					info: this.state.info.filter(
						info => info.key !== json.info.key)
				});
			case "UIResolved":
				let oldUis = Object.assign({}, this.state.uis);
				let newArray = oldUis[json.key] ? oldUis[json.key] : []
				var obj = { name: json.name, path: json.path };
				oldUis[json.key] = newArray
					.filter(link => link.path !== json.path).concat(obj);
				this.setState(
					{ uis: oldUis });
				break;
			case "Detected":
				break;

		}
	}
	constructor(props) {
		super(props);
		this.state = { info: [], uis: {} };
	}
	render() {
		const content = this.state.link ?
			<FrameView url={this.state.link}
				infoList={this.state.info}
				iframeListener={this.onLinkClick.bind(this)} 
				uis={this.state.uis} /> :
			<MopidyList infoList={this.state.info}
				uis={this.state.uis}
				iframeListener={this.onLinkClick.bind(this)} />
		return <div className="contentDiv fill">
			<MopidySocket url={Config.target} onmessage={this.onMessage.bind(this)} />
			<link rel="stylesheet" href={main} type="text/css" />
			{content}
		</div>
	}
}
const element = <Main prop="Contacting scanning server.." servers={fakeData} />;
document.addEventListener("DOMContentLoaded", function () {
	ReactDOM.render(
		element,
		document.getElementById('root')
	);
});

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}
