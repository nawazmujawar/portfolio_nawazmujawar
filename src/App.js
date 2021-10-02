import React, { Component } from "react";
import Project from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/prof_pic.jpg';
import Achivements from './Certificates';
import Titles from './Title';
import Quote from './Quotes';
import "./App.css";

class App extends Component {
  state = { displayBio: false };
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });

    if (document.getElementById("btnToggle").style.marginTop == "20px") {
      document.getElementById("btnToggle").style.marginTop = "0px";
    }
    else {
      document.getElementById("btnToggle").style.marginTop = "20px";
    }
  };

  render() {
    let bio = this.state.displayBio ? (
      <p className="info">Currently a self-learner.
        I'm eager to learn new things and collaborate with people to build software and solve technical issues.
        My major area of interest is theWeb Development. I also have programming experience in Python and Javascript. I did my Summer 2016 internship at RacksonsIT, Jaysingpur working with C-Sharp MVC technology and WebForms. I looking for opportunities to apply my skills in real-world problem-solving. And I am looking for a Fulltime position in Web Development.</p>
    ) : null;

    let BtnName = this.state.displayBio ? "Show Less" : "Read More";

    return (
      <div>
        <img src={profile} alt='profilepic' className='profile' />
        <h1>Hello World</h1>
        <Titles />
        <p>I'm always looking forward to work on meaningful projects.</p>

        {bio}
        <button id="btnToggle" onClick={this.toggleDisplayBio}>{BtnName}</button>


        <Project />
        <hr />
        <Achivements />
        <hr />
        <h2>Inspiring Quote</h2>
        <Quote />
        <hr />
        <SocialProfiles />
        <br />
        <br />
        <p>Copyright &copy; 2020 : Nawaz Mujawar </p>
      </div>
    );
  }
}

//exporting file
export default App;
