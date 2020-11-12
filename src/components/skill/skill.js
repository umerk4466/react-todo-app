import './skill.css';

function Skill(props) {
  return (
    <div className="skillContainer">
      <p>{props.skillName}</p>
      <div className="skillLine"><span className="skillPercentage" style={{width: props.percentage}}></span></div>
    </div>
  );
}

export default Skill;
