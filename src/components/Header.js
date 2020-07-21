import React,{ Component } from 'react'
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div>
			<div className='tc h'>
			   <h1 className='name'> MY_NAME</h1>
			   <button onClick={this.props.action1}> Profile </button>
			   <button onClick={this.props.action2}> Resume </button>
			   <button onClick={this.props.action3}> Projects </button>
			   <button onClick={this.props.action4}> Contact </button>
			</div>
			</div>
		)
	}
}

export default Header;