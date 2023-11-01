import React from 'react';
import './About.css'
import AboutImg from "../../assets/placeholder.png"
import CV from "../../assets/placeholder.png"
import Info from './Info';

const About = () => {
    return (
        <section>
            <h2 className='section__title' id="about">About</h2>
            <span className='section__subtitle'>A little introduction about me.</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info/>
                    <p className="about__descriptiom">Control scientist, I'm interested in formal methods, temporal logics and reinforcement learning. And I'm happy to speak with clients who has projects to carry out.</p>
                    <a download="" href={CV} className="button button--flex">
                    Download CV
                    <i className="bi bi-download"></i>
                </a>
                </div>
                
            </div>
        </section>
    )
}

export default About

