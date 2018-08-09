import React, { Fragment } from 'react';
import CreateJobForm from './CreateJobForm';

// can also have ( as implicit return  instead of  {
const CreateJob = props => {
  return (
    <div className="createJob__wrapper">
        <h3 className="createJob__header">Type in your Job details here!</h3>
        <CreateJobForm addJob={props.addJob} />
   </div>
  );
};

export default CreateJob;
