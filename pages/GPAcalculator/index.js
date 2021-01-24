import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import CourseForm from "../../component/CourseForm";
import CourseList from "../../component/CourseList";
import { CourseListData } from "../../component/CourseForm";

export const AllContext = createContext({});

const GPAcalculator = () => {
  const [myCourse, setMyCourse] = useState([]);
  const [isToggled, setIsToggled] = useState("");

  function renderCourse() {
    return <CourseList list={myCourse}/>;
  }

  function deleteCourse(course_id) {
    setMyCourse(myCourse.filter((list) => list.course_id !== course_id));
  }

  function calculateGPA() {
    let score = 0,
      sum_credit = 0;

    myCourse.forEach((value) => {
      if (value.grade == "-2");
      else {
        score += value.grade * value.credit;
        sum_credit += value.credit;
      }
    });

    let gpa = score / sum_credit;

    if (sum_credit == 0) gpa = 0;

    return gpa.toFixed(2);
  }

  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      const tmp = localStorage.getItem("data");
      const tmp_parse = JSON.parse(tmp);
      const tmp_class = tmp_parse.map(
        (list) =>{
          new CourseListData(
            list.course_id,
            list.name,
            list.credit,
            list.grade,
            list.grade_txt,
            list.semister
          )}
      );

      setMyCourse(tmp_class);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(myCourse));
    renderCourse();
  }, [myCourse.length]);

  return (
    <>
      <AllContext.Provider value={deleteCourse}>
        {isToggled ? (
          <div className="pop-upContainer" onClick={() => setIsToggled(false)}>
            <div className="pop-up">{isToggled}</div>
          </div>
        ) : (
          ""
        )}
        <div className="header">
          <h1 className="header-txt">GPA CALCULATOR</h1>
        </div>
        <div className="gpa-form-template">
          <h1>COURSE LIST</h1>
          <h1>COURSE FORM</h1>
          <div>{renderCourse()}</div>
          <div>
            <CourseForm setMyCourse={setMyCourse} myCourse={myCourse} setIsToggled={setIsToggled} />
          </div>
        </div>
        <div className="grade-display">
          <h1>GPA</h1>
          <span>{calculateGPA()}</span>
        </div>
      </AllContext.Provider>
    </>
  );
};

export default GPAcalculator;
