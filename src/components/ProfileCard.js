import React from 'react';
import Photo from './images/both.jpg';
import './ProfileCard.css'

const Card = () => {
	return (
		<div className='dib br3 pa4 grow co'>
			<h1 className='pro'>Profile</h1>
			<br/>
			<div className='con'>
				<img alt='MyPhoto' src={Photo}/>
				<div className='bt'>
					<h1 style={{ marginLeft: '18px'}}>MY_NAME</h1>
					<p style={{ fontSize: '20px' }}>Developer | Competitive Programmer</p>
					<p style={{ fontSize: '18px' }}>Don't know what to write about ourself.
					But ofcourse learn Problem Solving and Development Skills with strong passion for self-improvement.
					And also I have good chess skills and bring energy, patience, positivity and cultural values to the team.</p>
				</div>
				<div className='brdr'></div>
				<div className='dtls'>
			    	<p>Name: MY_NAME</p>
			    	<p>Email: <a href="">UserName@gmail.com</a></p>
			    	<p>Linkdin: <a href="">@UserName</a></p>
				</div>
			</div>
		</div>
	);
}

export default Card;