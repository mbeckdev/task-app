import React from 'react';
import './overview.styles.css';

const Overview = (props) => {
  const { taskList } = props;

  return (
    <div className="overview">
      <h2>All Tasks</h2>

      <div>
        {taskList.map((atask) => {
          return <li key={atask.id}>{atask.text}</li>;
        })}
      </div>
    </div>
  );
};

export default Overview;
