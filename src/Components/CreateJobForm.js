import React from 'react';

class CreateJobForm extends React.Component {
  nameRef = React.createRef();
  descRef = React.createRef();
  sentRef = React.createRef();
  titleRef = React.createRef();
  sourceRef = React.createRef();
  dateRef = React.createRef();

  createJob = e => {
    // 1. Stop page from submitting
    e.preventDefault();
    // 2. Get text from inputs
    const job = {
      name: this.nameRef.current.value,
      desc: this.descRef.current.value,
      sent: this.sentRef.current.value,
      title: this.titleRef.current.value,
      source: this.sourceRef.current.value,
      date: this.dateRef.current.value
    };
    this.props.addJob(job);
    // Reset form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="job-edit" onSubmit={this.createJob}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Company Name"
        />
        <input
          name="title"
          ref={this.descRef}
          type="text"
          placeholder="Title"
        />
        <textarea
          name="desc"
          type="text"
          ref={this.titleRef}
          placeholder="Description"
        />
        <input
          name="source"
          type="text"
          ref={this.sourceRef}
          placeholder="Source"
        />
        <input name="date" type="text" ref={this.dateRef} placeholder="Date" />
        <button type="submit">Add New Job</button>
      </form>
    );
  }
}

export default CreateJobForm;
