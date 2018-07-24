import React, { Fragment } from 'react';
import CreateJobForm from './CreateJobForm';

const CreateJob = props => {
  return (
    <Fragment>
      <h3>Type in your Job details here!</h3>
      <CreateJobForm addJob={props.addJob} />
    </Fragment>
  );
};

export default CreateJob;
