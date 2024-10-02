import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />

            </div>
            <div className="about-right">
                <div className="aboutpara">
                    <p>I am a 3rd-year undergraduate student at Sabaragamuwa University of Sri Lanka, pursuing
                         a BSc Hons in Software Engineering. My studies have provided me with a  
                         strong foundation in programming, problem-solving, and software development.</p>

                    <p>My passion is creating impactful software solutions, especially in web development and real-time 
                        applications. I enjoy exploring new technologies and aim to design innovative, 
                        user-friendly systems that address real-world problems effectively.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
               
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>

            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            


            
        </div>

      
    </div>
  )
}

export default About
