import React from 'react';

class CreateJobForm extends React.Component {
  nameRef = React.createRef();
  titleRef = React.createRef();
  descRef = React.createRef();
  sourceRef = React.createRef();
  dateRef = React.createRef();

  createJob = e => {
    // 1. Stop page from submitting
    e.preventDefault();
    // 2. Get text from inputs
    const job = {
      name: this.nameRef.current.value,
      title: this.titleRef.current.value,
      desc: this.descRef.current.value,
      source: this.sourceRef.current.value,
      date: this.dateRef.current.value,
      filter: false
    };
    this.props.addJob(job);
    // Reset form
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="createJobForm__wrapper">
        <form className="createJobForm__form" onSubmit={this.createJob}>
          <input
            className="createJobForm__inputs"
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Company Name"
          />
          <input
            className="createJobForm__inputs"
            name="title"
            ref={this.titleRef}
            type="text"
            placeholder="Title"
          />
          <input
            className="createJobForm__inputs"
            name="source"
            type="text"
            ref={this.sourceRef}
            placeholder="Source"
          />
          <textarea
            className="createJobForm__inputs"
            name="desc"
            type="text"
            ref={this.descRef}
            placeholder="Description"
          />
          <input 
            className="createJobForm__inputs"
            name="date" 
            type="text" 
            ref={this.dateRef} 
            placeholder="Date" />
          <button className="createJobForm__btn"type="submit">Add New Job</button>
        </form>
      </div>
    );
  }
}

export default CreateJobForm;
