import React from 'react'
import './Main.css'
import Profile from './ProfileCard'
import Resume from './ResumeCard'
import Project from './ProjectCard'
import Contact from './ContactCard'

const Main = ({ route }) => {
		return (
			<div className='body tc br-8 shadow-5'>
			{ 
				route === 'resume' 
			  ? 
			  <Resume /> 
			  :
			  route === 'projects' 
			  ? 
			  <Project /> 
			  : 
			  route === 'contact' 
			  ? 
			  <Contact /> 
			  :
			  <Profile />
			}
			</div>
		)
}
export default Main;
