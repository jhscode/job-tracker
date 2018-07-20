import React from 'react';

class AddJob extends React.Component {
  myInput = React.createRef();

  submitHandler = e => {
    // 1. Stop page from submitting
    e.preventDefault();
    // 2. Get text from input
    const searchInput = this.myInput.current.value;
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" ref={this.myInput} placeholder="Search" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddJob;
