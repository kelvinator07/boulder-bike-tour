import React, { Component, useEffect, useState } from "react";
import './Home.css';
import Footer from '../../components/Navigation/Footer/Footer';
import CountDown from '../../components/UI/CountDown/CountDown';

const Home = (props) => {

    return(
        <div className="Home">
            <div className="hero-container">
                <h1>Boulder Bike Tour {new Date().getFullYear} </h1>
                {/* <p>I'm a Software Engineer based in Lagos Nigeria.<span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p> */}
                <p><a className="btn btn-lg btn-primary" href="#preregister" role="button">Pre-Register</a></p>
                <CountDown />
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;