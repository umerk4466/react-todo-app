import Skill from './skill';
import './skill.css';


function SkillBlock() {
    return (
        <div className="skillBlockContainer">
            <Skill skillName={"ali"} percentage={"10%"}/>
            <Skill skillName={"ebbei"} percentage={"60%"}/>
            <Skill skillName={"awokoi"} percentage={"80%"}/>
            <Skill skillName={"aliwok"} percentage={"80%"}/>
        </div>
    );
}

export default SkillBlock;