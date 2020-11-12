import React from 'react';
import './Task.css';

function Task(props) {
  let workingOn = props.workingOn ? <span className="WorkingOn">Working on</span> : null;
  let [expend, setExpend] = React.useState(false);
  let taskText =  expend ? props.taskText : props.taskText.substring(0,200);


  const toggleTask = () => {
    setExpend(!expend);
  }
  
  return (
    <div className="TaskContainer">
      <div className="TaskFlexContainer">
        <div>{taskText}</div>
        <div><button onClick={toggleTask} className="btn ml-2"><i className="fa fa-ellipsis-v fa-2x"></i></button></div>
      </div>
      <div className="TaskFlexContainer mt-2">
        <div className="TaskDate">Dues Date : 10-12-2020</div>
        {workingOn}
      </div>
    </div>
  );
}

export default Task;
