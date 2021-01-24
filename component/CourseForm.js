import { GRADES } from "../utils/grades";
import { useReducer } from "react";

export class CourseListData {
  constructor(course_id, name, credit, grade, grade_txt, semister, key) {
    this.course_id = course_id;
    this.name = name;
    this.credit = credit;
    this.grade = grade;
    this.grade_txt = grade_txt;
    this.semister = semister;
  }
}

const CourseForm = (props) => {

  const initialCourseData = {
    course_id: 0,
    name: "",
    credit: 1,
    grade: -100,
    grade_txt: "",
    semister: 0,
  };

  const [courseData, dispatchCourse] = useReducer((prevState, action) => {
    switch (action.type) {
      case "setID":
        return { ...prevState, course_id: action.value };
      case "setName":
        return { ...prevState, name: action.value };
      case "setCredit":
        return { ...prevState, credit: action.value };
      case "setGrade": {
        var grade_string = toStringGrade(action.value);
        return { ...prevState, grade: action.value, grade_txt: grade_string };
      }
      case "setSemister":
        return { ...prevState, semister: action.value };
      case "increaseCredit": {
        var tmp = (prevState.credit % 3) + 1;
        return { ...prevState, credit: tmp };
      }
    }
  }, initialCourseData);

  function btn_sw() {
    return (
      <input
        type="button"
        className={"credit-btn credit-" + courseData.credit}
        value={ courseData.credit }
        onClick={() => dispatchCourse({ type: "increaseCredit" })}
      ></input>
    );
  }

  function toStringGrade(grade) {
    return GRADES.find((g) => g.value == grade).name;
  }

  function addCourse(e) {
    e.preventDefault();

    if (
      courseData.course_id === 0 ||
      courseData.name === "" ||
      courseData.credit === 0 ||
      courseData.grade_txt === "" ||
      courseData.semister === 0
    )
      props.setIsToggled("Please input all data")
    else if(props.myCourse.some((g) => courseData.course_id == g.course_id))
      props.setIsToggled("Duplicated data")
    else {
      var course = new CourseListData(courseData.course_id, 
        courseData.name, courseData.credit, courseData.grade, courseData.grade_txt, courseData.semister);

        props.setMyCourse([...props.myCourse, course])
    }
  }

  return (
    <>
      <form>
        <div className="courseForm-template">
          <div className="input-form">
            <input
              placeholder="Course's ID"
              onChange={(e) =>
                dispatchCourse({ type: "setID", value: e.target.value })
              }
            />
            <input
              placeholder="Course's Name"
              onChange={(e) =>
                dispatchCourse({ type: "setName", value: e.target.value })
              }
            />
          </div>
          <div className="semister-template">
            <form>
              <input
                type="radio"
                id="semister-1"
                value="1"
                name="semister"
                onChange={() =>
                  dispatchCourse({ type: "setSemister", value: 1 })
                }
              ></input>
              <label for="semister-1">SEMISTER 1</label>
              <input
                type="radio"
                id="semister-2"
                value="2"
                name="semister"
                onChange={() =>
                  dispatchCourse({ type: "setSemister", value: 2 })
                }
              ></input>
              <label for="semister-2">SEMISTER 2</label>
            </form>
          </div>
          <div className="grade-credit-template">
            <div>{btn_sw()}</div>
            <div>
              <select
                className="grade-btn"
                onChange={(e) =>
                  dispatchCourse({ type: "setGrade", value: e.target.value })
                }
              >
                <option value="-1" selected>
                  Select Grade...
                </option>
                <option value="4">A</option>
                <option value="3.5">B+</option>
                <option value="3">B</option>
                <option value="2.5">C+</option>
                <option value="2">C</option>
                <option value="1.5">D+</option>
                <option value="1">D</option>
                <option value="0">F</option>
                <option value="-2">W</option>
              </select>
            </div>
          </div>
          <div className="input-form">
            <button className="submit-btn" onClick={addCourse}>
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CourseForm;
