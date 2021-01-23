// import { createContext, useEffect, useState } from "react";
// import CourseForm from "../../component/CourseForm";
// import CourseList from "../../component/CourseList";
// import { CourseListData } from "../../component/CourseForm"

// export const AllContext = createContext({});

// function App() {
//   const [myCourse, setMyCourse] = useState([]);

//   const [isToggled, setIsToggled] = useState("");

//   function renderCourse() {
//     return <CourseList list={myCourse} />;
//   }

//   function deleteCourse(course_id) {
//     setMyCourse(myCourse.filter((list) => list.course_id !== course_id));
//   }

//   function calculateGPA() {
//     let score = 0,
//       sum_credit = 0;
//     myCourse.forEach((value) => {
//       if (value.grade == "-2");
//       else {
//         score += value.grade * value.credit;
//         sum_credit += value.credit;
//       }
//     });

//     let gpa = score / sum_credit;

//     if (sum_credit == 0) gpa = 0;

//     return gpa.toFixed(2);
//   }

//   useEffect(() => {
//     if(localStorage.getItem("data") != null){

//       const tmp = localStorage.getItem("data");
//       const tmp_parse = JSON.parse(tmp);
//       const tmp_class = tmp_parse.map((list) => new CourseListData(list.course_id, 
//         list.name, list.credit, list.grade, list.grade_txt, list.semister));

//       setMyCourse(tmp_class)
//     }
      
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("data", JSON.stringify(myCourse))
//     renderCourse();
//   }, [myCourse.length]);

//   return (
//     <AllContext.Provider value={deleteCourse}>
//       {isToggled ? (
//         <div className="pop-upContainer" onClick={() => setIsToggled(false)}>
//           <div className="pop-up">{isToggled}</div>
//         </div>
//       ) : (
//         ""
//       )}
//       <div>
//         <div className="header">
//           <h1>GPA CALCULATOR</h1>
//         </div>
//         {/* TODO ADD UI */}
//         <div>*** Click at Course Badge to Delete ***</div>
//         <div>*** Click at circle button to change credit ***</div>
//         <div className="form">
//           <label className="topic">COURSE LIST</label>
//           <label className="topic">COURSE FORM</label>
//           <div>{renderCourse()}</div>
//           <div className="courseForm-template">
//             <CourseForm setMyCourse={setMyCourse} myCourse={myCourse} setIsToggled={setIsToggled} />
//           </div>
//         </div>
//         <div className="grade-template grade-display">
//           <div>GPA</div>
//           <div className="grade-number">{calculateGPA()}</div>
//         </div>
//       </div>
//     </AllContext.Provider>
//   );
// }

// export default App;
