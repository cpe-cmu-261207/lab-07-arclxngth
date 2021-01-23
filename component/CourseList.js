import CourseCard from "./CourseCard"

const CourseList = ({ list }) => (
    <div className="courseCard-template">
      {list.map((course) => (
        <CourseCard 
        key={Math.random()} 
        course_id={course.course_id} 
        name={course.name} 
        credit={course.credit} 
        grade={course.grade} 
        grade_txt={course.grade_txt}
        semister={course.semister}/>
      ))}
    </div>
  );
  
  export default CourseList;