import { useState } from "react";

import axios from 'axios';





function CourseList (props){

const [courses, setCourses] = useState([]);

const getAllCourses = () =>{
    axios.get('http://localhost:8080/api/course/findAll')
    .then(response => {
        setCourses(response.data);
    })
    .catch(error => {
        console.log("Error with the call");
    });
}


const courseListItems = courses.map((course) =>
<tr key = {course.id}>
    <td>{course.name} </td>
    <td>{course.instructor} </td>
    <td>{course.abreviatedName} </td>
</tr>


)

return (


<div>
<table className="coursesViewTable">
                <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Abbreviation</th>
                    <th>Instructor</th>
                </tr>
                </thead>
                <tbody>
                    {courseListItems}
                </tbody>
            </table>
            <button className = 'center'onClick={getAllCourses}>Get Courses</button>

</div>



)




}



export default CourseList;