import React from 'react';
import Photo from './images/both.jpg';
import './ProfileCard.css'

const Card = () => {
	return (
		<div className='bg-light-green dib br3 pa4 ma2 grow'>
			<h1>Profile</h1>
			<div className='flex'>
			<img alt='MyPhoto' src={Photo}/>
			<div >
				<h2 className='ma4 flex'>My_Name</h2>
				<p>Developer || Competitive programmer</p>
				<p>Don't know what to write about ourself. But ofcourse we are learn coding and development skills.</p>
				<p>A Developer with strong passion for self-improvement.</p>
				<p>I have strong Problem Solving skills & bring energy, patience, positivity and 
				cultural values to the team.</p>
			</div>
			<div>
			    <p>Name: My_Name</p>
			    <p>Email: xyz@gmail.com</p>
			    <p>Linkdin: xyz</p>
			</div>
			</div>
		</div>
	);
}

export default Card;