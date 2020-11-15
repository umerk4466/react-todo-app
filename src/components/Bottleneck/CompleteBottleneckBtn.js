function CompleteBottleneckBtn({isCompleted}) {
    const finishBottleneck = (e) => {
        e.stopPropagation();
        alert("finishBottleneck")
    }
    const unFinishBottleneck = (e) => {
        e.stopPropagation();
        alert("unFinishBottleneck")
    }
    const btnFunction = isCompleted ? unFinishBottleneck : finishBottleneck;
    const btnClass = isCompleted ? "fa fa-undo" : "fa fa-check";
    return (
        <div>
            <button onClick={btnFunction} className="btn ml-2">
                <i className={btnClass}></i>
            </button>
        </div>
    );
  }
  
  export default CompleteBottleneckBtn;