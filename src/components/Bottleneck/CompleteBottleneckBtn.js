import React from "react";


function CompleteBottleneckBtn({props}) {
    const [btnClass, setBtnClass] = React.useState(props.isCompleted ? "fa fa-undo" : "fa fa-check");
    const finishBottleneck = (e) => {
        e.stopPropagation();
        alert("finishBottleneck");
        setBtnClass("fa fa-undo");
    }
    const unFinishBottleneck = (e) => {
        e.stopPropagation();
        alert("unFinishBottleneck");
        setBtnClass("fa fa-check");

    }
    const btnFunction = props.isCompleted ? unFinishBottleneck : finishBottleneck;
    return (
            <button onClick={btnFunction} className="btn ml-2">
                <i className={btnClass}></i>
            </button>
    );
}
export default CompleteBottleneckBtn;