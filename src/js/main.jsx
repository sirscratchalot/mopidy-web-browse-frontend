import React from 'react';
import ReactDOM from 'react-dom';
import MopidyList from './components/mopidylist.jsx';
import MopidySocket from './mopidysocket.jsx'
import main from "../sass/main.scss";

const fakeData = {
	name: "MopidyOne",
	url: "http://urlOne",
	key:"fakeKeyIam",
	type:"_mopidy-http._tcp.local.",
	port: 6680,
	urls:["http://localhost:6680"],
	httpEnabled: true,
	defaultGui: "GUI-One",
	identifier: "http://urlOne:6680"
};
/**
 * 
 */
class Main extends React.Component {
	onmessage(event) {
		var json = JSON.parse(event.data);
		console.log("I got:" + event.data);
		var tmp = this.state.info.slice();
		switch (json.event) {
			case "Resolved":
				this.setState(
					 {info: this.state.info.concat([json.info]) }
				);
				break;
			case "Removed":
				this.setState({
						info: this.state.info.filter(
							info => info.key !== json.info.key)
					});
				break;
			case "Detected":
				break;

		}
	}
	constructor(props) {
		super(props);
		this.state = { info: [fakeData] };
	}
	render() {
		return <div>
			<MopidySocket onmessage={this.onmessage.bind(this)} />
			<link rel="stylesheet" href={main} type="text/css" />
			<h1>React is rendering with props! See: {this.props.prop}!!</h1>
			<MopidyList infoList={this.state.info} />
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
