import React from "react";
import Profile from "./Profile/Profile";
import Footer from './Footer/Footer'
import './Home.css'
import Header from "./Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import ContactMe from "../ContactMe/ContactMe";
export default function Home(){

    return(
        <div className="content">
        <div className="home-container">
          <Header/>
          <Profile/>
          <Footer/>
        </div>
        <div className="about">
                <AboutMe/>
        </div>
        <div className="resume">
                <Resume/>
        </div>
        <div className="ContactMe">
          <ContactMe/>
        </div>
        </div>
    )
}