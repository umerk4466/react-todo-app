import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AddTaskButton from './components/AddTaskButton/AddTaskButton';
import Task from './components/Task/Task';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid">
      <AddTaskButton/>
      <Task workingOn="true" taskText="First stediv of the tasks This  of the tasks This  of the tasks This   of the tasks This  of the tasks This   of the tasks This   of the tasks This  of the tasks This  of the tasks This   of the tasks This   of the tasks This   of the tasks This   of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This is a toast on a gam secondary background — check it out!." />
      <Task taskText="Saf the tasks This  of the tasks This  of the tasks This   of the tasks This   of the tasks This   of the tasks This   of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This is a toast on a gam secondary background — check it out!." />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
