import React from 'react';
import './App.css';

import Overview from './components/overview/overview.component';

import uniqid from 'uniqid';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: { text: '', id: uniqid(), listNumber: 1 },
      taskList: [],
      nextListNumber: 2,
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        listNumber: this.state.task.listNumber,
      },
    });
  };

  submitTask = (e) => {
    e.preventDefault();

    this.setState({
      task: {
        text: '',
        id: uniqid(),
        listNumber: this.state.nextListNumber++,
      },
      taskList: this.state.taskList.concat(this.state.task),
      nextListNumber: this.state.nextListNumber++,
    });
  };

  render() {
    const { task, taskList } = this.state;

    return (
      <div className="App">
        <h1>A Task app</h1>

        <div>
          <form onSubmit={this.submitTask}>
            <input
              type="text"
              value={task.text}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Add Task</button>
          </form>

          <div className="task-list"></div>
        </div>

        <Overview taskList={taskList} />
      </div>
    );
  }
}

export default App;
