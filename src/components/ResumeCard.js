import React from 'react'
import './ResumeCard.css'

export default class Resume extends React.Component {
	render() {
		return (
			<div className='dib br3 pa5 grow co'>
				<h1 className='pro'>Resume</h1>
				<div className='con'>
					<div className='lSide'>
						<h3>PROJECTS</h3>
						<div className='sec'>
							<h4>Google</h4>
							<p>This is a google assistant project</p>
						</div>
						<div className='sec'>
							<h4>Portfolio</h4>
							<p>This is a portfolio project</p>
						</div>
						<div className='sec'>
							<h4>E-commerce</h4>
							<p>This is a e-commerce website</p>
						</div>
						<h3>EDUCATION</h3>
						<div className='sec'>
							<h4>JC Bose University of Science & Technology, YMCA</h4>
							<p>B.Tech-CE  |  CGPA: X.XX/10.00</p>
						</div>
						<div className='sec'>
							<h4>School Name</h4>
							<p>12th  |  CBSE  |  Percentage: XX.XX/100.00</p>
						</div>
						<div className='sec'>
							<h4>School Name</h4>
							<p>10th  |  CBSE  |  CGPA: X.XX/10.00</p>
						</div>
						<h3>ACHIEVEMENTS</h3>
						<div className='sec'>
							<li>3* rating on codechef.</li>
						</div>
					</div>
					<div className='rSide'>
						<h3>CODING SKILLS</h3>
						<div className='sec'>
							<li>C</li>
							<li>C++</li>
							<li>Javascript</li>
						</div>
						<h3>DEV SKILLS</h3>
						<div className='sec'>
							<li>HTML</li>
							<li>CSS</li>
							<li>React</li>
							<li>Node.js</li>
							<li>NoSql</li>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
