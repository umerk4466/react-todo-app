function CompleteBottleneckBtn({props}) {
    const finishBottleneck = (e) => {
        e.stopPropagation();
        alert("finishBottleneck");
    }
    const unFinishBottleneck = (e) => {
        e.stopPropagation();
        alert("unFinishBottleneck");
    }
    const btnFunction = props.isCompleted ? unFinishBottleneck : finishBottleneck;
    const btnClass = props.isCompleted ? "fa fa-undo" : "fa fa-check";
    return (
            <button onClick={btnFunction} className="btn ml-2">
                <i className={btnClass}></i>
            </button>
    );
}
export default CompleteBottleneckBtn;