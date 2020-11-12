import './Task.css';

function Task(props) {
  return (
    <div className="TaskContainer">
      <div className="TaskFlexContainer">
        <div>First stediv of the tasks This  of the tasks This  of the tasks This   of the tasks This  of the tasks This   of the tasks This   of the tasks This  of the tasks This  of the tasks This   of the tasks This   of the tasks This   of the tasks This   of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This  of the tasks This is a toast on a gam secondary background — check it out!.....</div>
        <div><button className="btn ml-2"><i className="fa fa-ellipsis-v fa-2x"></i></button></div>
      </div>
      <div className="TaskFlexContainer mt-2">
        <div className="TaskDate">Dues Date : 10-12-2020</div>
        <span class="WorkingOn">Working on</span>
      </div>
    </div>
  );
}

export default Task;
