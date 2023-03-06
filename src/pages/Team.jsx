import React from 'react'
import Header from '../components/Header'
import TeamCard from '../components/TeamCard';
import Founder from '../images/CEO.jpg'; 
import Jo from '../images/jo.jpg';
import "./Team.css"
import Footer from '../components/Footer'

const Team = () => {
  return (
    <div>
        <Header title='Team'/>
            <section className="container">
                <div className="">
                    <h1 className="f_title">Founder</h1>
                    <div className="f_container">
                        <div className="f_img">
                            <img src={Founder} className="f_img_item" alt=""/>
                        </div>
                        <div className="f_body">
                            <p class="">As the CEO of Guava Technologies, I am passionate about driving innovation and growth for our customers and team. With over 15 years of industry experience, I have a proven track record of success in [industry/field]. I believe in the power of collaboration and strive to create a culture of inclusivity and empowerment at Guava Technologies. I am excited to continue leading the charge as we work towards achieving our mission and realizing our full potential.
                            </p>
                            <a href="#collections" class="btn bg-purple size2 white">Show more</a>
                        </div>
                    </div>
                </div>
            </section>      
            <div className="card-container">
                <div className="header">
                    <h2>Meet The Team</h2>
                    <p>Meet the wonderful team that made it all happen</p>
                </div>
                <div className="team-container">
                    <TeamCard name="Frimpomaa" image={Jo} position="Software Developer"/>
                    <TeamCard name="Frimpomaa" image={Jo} position="Software Developer"/>
                    <TeamCard name="Frimpomaa" image={Jo} position="Software Developer"/>
                    <TeamCard name="Frimpomaa" image={Jo} position="Software Developer"/>
                    <TeamCard name="Frimpomaa" image={Jo} position="Software Developer"/>
                    <TeamCard name="Frimpomaa" image={Jo} position="Software Developer"/>
                    <TeamCard name="Frimpomaa" image={Jo} position="Software Developer"/>
                    <TeamCard name="Frimpomaa" image={Jo} position="Software Developer"/>
                    <TeamCard name="Frimpomaa" image={Jo} position="Software Developer"/>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Team