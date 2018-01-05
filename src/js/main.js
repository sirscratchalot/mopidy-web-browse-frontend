import React from 'react';
import ReactDOM from 'react-dom';
import main from "../sass/main.scss";
/**
 * 
 */
class Main extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return <div>
			<link rel="stylesheet" href={main} type="text/css" />
			<h1>React is rendering with props! See: {this.props.prop}!!</h1>
		</div>
	}
}
const element = <Main prop="I AM A MIGHTY PROP2!" />;
document.addEventListener("DOMContentLoaded",function(){
ReactDOM.render(
	element,
	document.getElementById('root')
);
});

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
