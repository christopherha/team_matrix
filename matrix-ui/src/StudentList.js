import { useState } from "react";

import axios from 'axios';


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
    <tc>{student.firstName} </tc>
    <tc>{student.lastName} </tc>
    <tc>{student.grade} </tc>
</tr>


)


return(
<div>
<button onClick={getAllStudents}>Button</button>
<table>
{studentListItems}
</table>


</div>

);
}


export default StudentList;