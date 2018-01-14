import React from 'react';
import ReactDOM from 'react-dom';
import MopidyServer from './mopidy-server.jsx';
import MopidySocket from './mopidysocket.jsx'
import main from "../sass/main.scss";

const fakeData = [{
	name: "MopidyOne",
	url: "http://urlOne",
	port: 6680,
	httpEnabled:true,
	defaultGui: "GUI-One",
	identifier: "http://urlOne:6680"
}];
/**
 * 
 */
class Main extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const servers = this.props.servers.map((server, index) => (
			<MopidyServer port={server.port} name={server.name}
			 defaultGui={server.defaultGui}
			 httpEnabled={server.httpEnabled}
			 url={server.url}
			 />
		))
		return <div>
			<link rel="stylesheet" href={main} type="text/css" />
			<h1>React is rendering with props! See: {this.props.prop}!!</h1>
			
			{servers}
		</div>
	}
}
const element = <Main prop="I AM A MIGHTY PROP2!" servers={fakeData} />;
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
