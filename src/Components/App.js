import React, { Component } from 'react';

class App extends Component {
  state = {
    searchInput: {}
  };

  myInput = React.createRef();

  submitHandler = e => {
    // 1. Stop page from submitting
    e.preventDefault();
    // 2. Get text from input
    const searchInput = this.myInput.current.value;
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <input type="text" ref={this.myInput} placeholder="Search" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
