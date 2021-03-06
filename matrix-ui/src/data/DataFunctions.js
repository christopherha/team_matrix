import axios from 'axios';

export const addNewStudent = (student) =>{
    return  axios ({url: "http://localhost:8080/api/student/addStudent",
        method: "POST",
        headers: {'Accept':'application/json', 'Content-Type':'application/json'},
        data: student});
}

export const getStudentById = (studentId) => {
    return  axios ({url: `http://localhost:8080/api/student/findById?id=${studentId}`,
        method: "GET",
        headers: {'Accept':'application/json'}});
}

const enrollmentApi = (studentId, courseId, endpoint) => {
    return  axios ({url: `http://localhost:8080/api/student/${endpoint}?studentId=${studentId}&courseId=${courseId}`,
        method: "POST",
        headers: {'Accept':'application/json', 'Content-Type':'application/json'}});
}

export const enrollStudent = (studentId, courseId) => {
    return enrollmentApi(studentId, courseId, "addCourseToStudent");
}

export const disenrollStudent = (studentId, courseId) => {
    return enrollmentApi(studentId, courseId, "removeCourseFromStudent");
}

export const getAllCourses = () => {
    return  axios ({url: "http://localhost:8080/api/course/findAll",
        method: "GET",
        headers: {'Accept':'application/json'}});
}

export const addNewCourse = (course) =>{
    return  axios ({url: "http://localhost:8080/api/course/addCourse",
        method: "POST",
        headers: {'Accept':'application/json', 'Content-Type':'application/json'},
        data: course});
}
