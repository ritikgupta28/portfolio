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

	onRouteChange = (route) => {
		this.setState({ route: route })
	}

	render() {
		return (
			<div>
				<Header 
				 onRouteChange={this.onRouteChange.bind(this)}
				/>
				<Main route={this.state.route} />
				<Footer />
			</div>
		)
	}
}