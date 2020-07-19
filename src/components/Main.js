import React from 'react'
import './Main.css'
import ProfileCard from './ProfileCard'

export default class Main extends React.Component {
	render() {
		return (
			<div className='body tc br-8 shadow-5'>
				<ProfileCard />
			</div>
		)
	}
}
