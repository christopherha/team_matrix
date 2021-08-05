import { useState } from "react";







function CourseList (props){

const [courses, setCourses] = useState();

const getAllCourses = () =>{
    axios.get('http://localhost:8080/api/course/findAll')
    .then(response => {
        setCourses(response.data);
    })
    .catch(error => {
        console.log("Error with the call");
    });
}

}


export default CourseList;