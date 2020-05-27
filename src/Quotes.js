import React, { Component } from "react";

export default class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: null,
      isLoading: true,
    };
  }
   componentDidMount() {
   
  fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
  .then(response => response.json() )
  .then(data => this.setState({quote :  data.quote, isLoading: false}))
  .catch(err=>console.log(err));

  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <p>"{this.state.quote.quoteText}"</p>
        <p>- {this.state.quote.quoteAuthor}</p>
      </div>
    );
  }
}
