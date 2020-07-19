import React from 'react'
import './Main.css'
import ProfileCard from './ProfileCard'
import ResumeCard from './ResumeCard'
import ProjectCard from './ProjectCard'
import ContactCard from './ContactCard'

const Main = ({ss}) => {
		return (
			<div className='body tc br-8 shadow-5'>
			{ ss === 'resume' 
			? <ResumeCard /> 
			: ss === 'project' 
			? <ProjectCard /> 
			: ss=== 'contact' 
			? <ContactCard /> 
			:<ProfileCard />
			}
			</div>
		)
}
export default Main;
