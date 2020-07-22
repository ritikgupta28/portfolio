import React from 'react'
import './Footer.css'
import pic from './images/code.png';

export default class Footer extends React.Component {
	render() {
		return (
			<div className='tc'>
				<p>Made <img alt="code" src={pic} className='im' /> by Ritik & Sahil</p>
				<p>#coding #family #friends #sleep #improve #learn</p>
			</div>
		)
	}
}
