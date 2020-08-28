import React,{ Component } from 'react'
import './Header.css';

class Header extends Component {
	handler = (e) => {
		this.props.onRouteChange(e.target.value)
	}

	render() {
		return (
			<div>
			<div className='h'>
			   <h1 className='name'> MY_NAME</h1>
			   <button value='profile' onClick={this.handler}> Profile </button>
			   <button value='resume' onClick={this.handler}> Resume </button>
			   <button value='projects' onClick={this.handler}> Projects </button>
			   <button value='contact' onClick={this.handler}> Contact </button>
			</div>
			</div>
		)
	}
}

export default Header;