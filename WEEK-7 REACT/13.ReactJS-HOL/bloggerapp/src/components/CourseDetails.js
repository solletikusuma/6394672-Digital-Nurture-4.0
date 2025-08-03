const CourseDetails = ({ courses }) => (
  <div className="column">
    <h2>Course Details</h2>
    {courses.map((course) => (
      <div key={course.id}>
        <h3>{course.cname}</h3>
        <p>{course.date}</p>
      </div>
    ))}
  </div>
);

export default CourseDetails;
