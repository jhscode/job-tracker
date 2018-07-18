import React, { Component } from 'react';

class App extends Component {
  state = {
    searchInput: {},
    changeInput: {}
  };

  myInput = React.createRef();

  submitHandler = e => {
    console.log(this.myInput);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <input type="text" ref={this.myInput} placeholder="Placeholder" />
        </form>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default App;
