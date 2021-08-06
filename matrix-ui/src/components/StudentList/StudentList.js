import { useState } from "react";
import {Link} from "react-router-dom";

import axios from 'axios';
import '../EnrollCourseView/EnrollCourseView.css'

function StudentList(props){

const [student, setStudent] = useState([]);

const getAllStudents = () =>{
    axios.get('http://localhost:8080/api/student/findAll')
    .then(response => {
        setStudent(response.data);
    })
    .catch(error => {
        console.log("Error with the call");
    });
}


const studentListItems = student.map((student) =>
<tr key = {student.id}>
    
    <td>{student.firstName} </td>
    <td>{student.lastName} </td>
    <td>{student.grade} </td>
   <td> <Link to={`/enroll?id=${student.id}`}>Enroll</Link>
</td>
</tr>


)


return(
<div>
<table className="coursesViewTable">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Grade</th>
                    <th>Enroll</th>
                </tr>
                </thead>
                <tbody>
                    {studentListItems}
                    
                </tbody>
            </table>
            <button className = 'center' onClick={getAllStudents}>Get Students</button>
</div>

);
}


export default StudentList;