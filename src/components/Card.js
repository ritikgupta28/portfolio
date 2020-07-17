import React from 'react';
import Photo from './images/both.jpg';
import './Card.css'

const Card = () => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow'>
			<h1>About</h1>
			<img alt='MyPhoto' src={Photo} />
			<div>
				<h2>My_Name</h2>
				<p>Don't know what to write about ourself. But ofcourse we are learn coding and development skills.</p>
			</div>
		</div>
	);
}

export default Card;