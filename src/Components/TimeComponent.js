import React from 'react';

class TimeComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {dte : new Date()};
	}

	 tick(){
		this.setState({dte : new Date()});
	}

	componentDidMount(){
		this.Timer = setInterval(() => this.tick(),1000);

	}
	componentWillUnmount(){
		clearInterval(this.timerID);

	}
	render(){
		return(
			<div>
     			 <h2>Time is ==> {this.state.dte.toLocaleTimeString()}.</h2>
   			 </div>
			);
	}
}

export default TimeComponent;