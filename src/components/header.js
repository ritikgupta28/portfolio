import React,{ Component } from 'react'
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className='tc h1'>
			   <p>About </p>
			   <p>Projects </p>
			   <p>Resume </p>
			   <p>Internships </p> 
			   <p>Contact </p>
			</div>
		)
	}
}

export default Header;