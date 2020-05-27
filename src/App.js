import React, { Component } from "react";
import Project from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/prof_pic.jpg';
import Achivements from './Certificates';
import Titles from './Title';
import Quote from './Quotes';

class App extends Component {
  state = { displayBio: false };
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    let bio = this.state.displayBio ? (
      <div>
        <p>Currently a self-learner.
           I'm eager to learn new things and collaborate with people to build software and solve technical issues.
           My major area of interest is theWeb Development. I also have programming experience in Python and Javascript. I did my Summer 2016 internship at RacksonsIT, Jaysingpur working with C-Sharp MVC technology and WebForms. I looking for opportunities to apply my skills in real-world problem-solving. And I am looking for a Fulltime position in Web Development.</p>
        <button onClick={this.toggleDisplayBio}>Show less</button>
      </div>
    ) : (
      <div>
        <button onClick={this.toggleDisplayBio}>Read More</button>
      </div>
    );
    return (
      <div>
        <img src={profile} alt='profilepic' className='profile'/>
        <h1>Hello World</h1>
        <Titles />   
        <p>I'm always looking forward to work on meaningful projects.</p>
        {bio}
        
        <Project/>
        <hr/>
        <Achivements/>
        <hr/>
        <h2>Inspiring Quote</h2>
        <Quote />
        <hr/>
        <SocialProfiles/>
        <br/>
        <br/>
        <p>Copyright &copy; 2020 : Nawaz Mujawar </p>
      </div>
    );
  }
}

//exporting file
export default App;
