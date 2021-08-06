import { useState } from "react";

import axios from 'axios';
import './components/EnrollCourseView/EnrollCourseView.css'

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
<tr>
    <td><input type="checkbox"/></td>
    <td>{student.firstName} </td>
    <td>{student.lastName} </td>
    <td>{student.grade} </td>
</tr>


)


return(
<div>
<table className="coursesViewTable">
                <thead>
                <tr>
                    <th>Select</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Grade</th>
                </tr>
                </thead>
                <tbody>
                    {studentListItems}
                    <button onClick={getAllStudents}>Get Students</button>
                </tbody>
            </table>
</div>

);
}


export default StudentList;