import React, { Fragment } from 'react';
import CreateJobForm from './CreateJobForm';

const CreateJob = props => {
  return (
    <Fragment>
      <div className="createJob__wrapper">
        <h3 className="createJob__header">Type in your Job details here!</h3>
        <CreateJobForm addJob={props.addJob} />
      </div>
    </Fragment>
  );
};

export default CreateJob;
