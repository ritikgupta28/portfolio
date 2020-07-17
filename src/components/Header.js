import React,{ Component } from 'react'
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className='tc h1'>
			   <button onClick> Profile </button>
			   <button onClick> Resume </button>
			   <button onClick> Projects </button>
			   <button onClick> Contact </button>
			</div>
		)
	}
}

export default Header;
