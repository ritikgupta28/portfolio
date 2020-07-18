import React from 'react';
import Photo from './images/both.jpg';
import './ProfileCard.css'

const Card = () => {
	return (
		<div className='dib br3 pa5 grow co'>
			<h1 className='pro'>Profile</h1>
			<div className='con'>
			<img alt='MyPhoto' src={Photo}/>
			<div >
				<h2 className='tl'>My_Name</h2>
				<p className='tx'>Developer || Competitive programmer</p>
				<p className='tx'>Don't know what to write about ourself. But ofcourse we are learn coding and development skills.
				A Developer with strong passion for self-improvement.
				I have strong Problem Solving skills & bring energy, patience, positivity and 
				cultural values to the team.</p>
			</div>
			<div className='vl'></div>
			<div className='pt'>
			    <p>Name: My_Name</p>
			    <p>Email:xyz@gmail.com</p>
			    <p>Linkdin: @xyz</p>
			</div>
			</div>
		</div>
	);
}

export default Card;