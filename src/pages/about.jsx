import React from 'react';
import AboutGuy from "../assets/AboutGuy.svg";
import './about.css'

const About = () => {
  return (
    <div>
      <div className="para">

        <div className="about-img">
           <img src={AboutGuy} alt="" />
        </div>
        <div className="about-para">
          <h3>ABOUT</h3>
          <h1> GENESIS4</h1>
        <p>
          
            Rev your engines and fasten your seat belts as the GDXR Club kick-starts the Fourth Edition of Genesis - your ticket to an adventure that hits closer to home than ever! Returning after the 2024 Last Edition, this 2025 Genesis isn't just about pixels and coding; it's about bringing the spirit of<br/>
            games to life.<br/>
            <br/>
            Picture this: two action-packed stages spread over 15 thrilling days - the Online Game Jam Round and the mysterious Offline Surprise Element Round. It's like tackling missions, but instead of evading virtual cops, you're navigating through unexpected challenges.
            <br/><br/>
            But that's not all! Alongside the coding frenzy, enjoy interactive challenges that'll have you hooked, just like trying to complete a heist without a hitch. Top it off with wisdom from industry pros during engaging speaker sessions.

            So fire up your gaming rigs, and get ready to dive into the virtual streets of Genesis. In this gaming universe, every line of code is a twisty turn down the neighborhood, and your creativity is the turbo boost. The clock's ticking, and the joystick beckons - let's make these virtual streets ours!
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
