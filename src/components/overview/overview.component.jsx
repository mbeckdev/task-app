import React from 'react';
import './overview.styles.css';

const Overview = (props) => {
  const { taskList } = props;

  console.log(taskList);
  return (
    <div className="overview">
      <h2>All Tasks</h2>

      <ul>
        {taskList.map((atask) => {
          return (
            <li key={atask.id}>
              {atask.listNumber}. {atask.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Overview;
