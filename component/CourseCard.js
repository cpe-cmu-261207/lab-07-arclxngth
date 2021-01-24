import { useContext } from "react";
import { AllContext } from "../pages/GPAcalculator/index"

const CourseCard = (props) => {

  const onDeleteCourse = useContext(AllContext)

  return (
    <>
    <div className={"statementElement statementElement-" + props.semister} onClick={() => onDeleteCourse(props.course_id)}>
      <span className="statement-id">{props.course_id}</span>
      <aside>GRADE: {props.grade_txt}</aside>
      <aside>CREDIT: {props.credit}</aside>
    </div>
    </>
  );
};

export default CourseCard;