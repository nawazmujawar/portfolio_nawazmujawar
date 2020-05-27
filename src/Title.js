import React, { Component } from "react";

const TITLE = [
  "an Frontend Developer",
  "an Enthusiastic Learner",
  "an Gamer",
  "an Music Lover",
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    this.animateTitle();
  }

  componentWillMount() {
    clearInterval(this.titleInterval); // here background running stops
    clearTimeout(this.timeOut);
  }
  animateTitle = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLE.length;
      this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000);
      this.setState({ titleIndex, fadeIn: true });
    }, 4000);
  };
  render() {
    const { titleIndex, fadeIn } = this.state;
    const title = TITLE[titleIndex];
    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am {title}
      </p>
    );
  }
}

export default Title;
