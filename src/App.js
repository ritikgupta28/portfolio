import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: 'profile'
		} 
	}
	handler1() {
        this.setState({
            route: 'profile'
        });
    }
    handler2() {
        this.setState({
            route: 'resume'
        });
    }
    handler3() {
        this.setState({
            route: 'project'
        });
    }
    handler4() {
        this.setState({
            route: 'contact'
        });
    }
	render() {
		return (
			<div>
				<Header 
				action1={this.handler1.bind(this)} 
				action2={this.handler2.bind(this)} 
				action3={this.handler3.bind(this)} 
				action4={this.handler4.bind(this)} 
				/>
				<Main ss={this.state.route} />
				<Footer />
			</div>
		)
	}
}