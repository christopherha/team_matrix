import './EnrollCourseView.css'
import {disenrollStudent, enrollStudent, getAllCourses, getStudentById} from "../../data/DataFunctions";
import {useState, useEffect} from "react";
import {useHistory, useLocation} from 'react-router-dom';

const EnrollCourseView = (props) => {

    // TODO This needs to be passed in props or loaded. Then delete this line
    // mocked current Student data
    // const currentStudent = {id: "1", firstName: "AJ", lastName: "Colby", grade: "Freshman", courses: [{id: 3},{id: 4}]};

    const [currentStudent, setCurrentStudent] = useState({});

    const location = useLocation();
    const studentIdParam = new URLSearchParams(location.search).get("id");
    const selectedStudentId = studentIdParam != null ? studentIdParam : props.studentId;

    const history = useHistory();

    const getStudent = () => {
        console.log("Called the callStudent Method with id ",  studentIdParam)

        if (selectedStudentId === null) {
            console.log("Student id not provided! ");
        } else {
            getStudentById(selectedStudentId).then(
                response => {
                    console.log("Found student ",  response.data)
                    setCurrentStudent(response.data)
                    history.push(`/enroll?id=${selectedStudentId}`);
                }
            ).catch(
                error => console.log("Failed to fetch student!" + error)
            )
        }
    }


    const getData = () => {

        console.log("Called the callStudent Method with id ", studentIdParam)

        if (selectedStudentId === null) {
            console.log("Student id not provided! ");
        } else {
            getStudentById(selectedStudentId).then(
                response => {
                    console.log("Found student ", response.data)
                    setCurrentStudent(response.data)
                    history.push(`/enroll?id=${selectedStudentId}`);
                }
            ).catch(
                error => console.log("Failed to fetch student!" + error)
            )
        }

            console.log("Called the allCourses Method")
            getAllCourses().then(
                response => {
                    console.log("Fetched courses", response.data)
                    setAllCoursesList(response.data)
                }
            ).catch(
                error => console.log("Failed to fetch courses!" + error)
            )
        }

    useEffect(() => {getData()}, []);
    // useEffect(() => {getStudent()}, []);

    const [allCoursesList, setAllCoursesList] = useState([]);

    const allCourses = () => {
        console.log("Called the allCourses Method")
        getAllCourses().then(
            response => {
                console.log("Fetched courses", response.data)
                setAllCoursesList(response.data)
            }
        ).catch(
            error => console.log("Failed to fetch courses!" + error)
        )
    }

    // useEffect(() => {allCourses()}, []);

    // Get all of the course id's the Student is enrolled in when the page initially loads.
    // Needs Student object of current selected Student. (currently mocked with 'currentStudent')
    const allDefaultEnrolledCourses = () => {

        if (currentStudent.courses !== null) {
            console.log("Printing student ", currentStudent)
            return currentStudent.courses.map((course) => course.id);
        } else {
            console.log("Student unavailable... ");
            getStudent();
            return currentStudent.courses.map((course) => course.id);
        }
    };

    // Set whether this student is already enrolled in the current course (passed as the param)
    const setDefaultEnrollmentStatus = (course) => {
        return (allDefaultEnrolledCourses().some(enrolledCourseId => course.id === enrolledCourseId))
    }

    // Iterate over the list of all available courses and set their defaulted enrollment status
    const allCoursesWithEnrollStatus = allCoursesList.map((course) => ({...course, isEnrolled: setDefaultEnrollmentStatus(course)}));

    // Whenever we check/uncheck enrollment can enroll/disenroll.
    // We need the current student, course that was checked/unchecked, and status of enroll
    const onEnrollCheckChange = (event, course) => {
        const isEnrolled = event.target.checked;
        if (isEnrolled) {
            // enroll the student
            console.log("Enrolling student " + currentStudent.id + " in course " + course.id);
            enrollStudent(currentStudent.id, course.id).then(
                response => console.log("Enrolled the Student! Status + " + response.status)
            ).catch(
                error => {
                    console.log("Failed to enroll student!" + error);
                }
            )
        } else {
            // disenroll the student
            console.log("Disenrolling student " + currentStudent.id + " in course " + course.id);
            disenrollStudent(currentStudent.id, course.id).then(
                response => console.log("Disenrolled the Student! Status + " + response.status)
            ).catch(
                error => {
                    console.log("Failed to disenroll student!" + error);
                }
            )
        }
    }

    return (
        <div>
            <table className="coursesViewTable">
                <thead>
                <tr>
                    <th>Enroll</th>
                    <th>Id</th>
                    <th>Course Name</th>
                    <th>Abbreviated Name</th>
                    <th>Instructor</th>
                </tr>
                </thead>
                <tbody>
                        {
                            allCoursesWithEnrollStatus.map(course => {
                            return (
                                <tr key={course.id}>
                                <td><input type="checkbox" defaultChecked={!!course.isEnrolled}  onChange={(event) => onEnrollCheckChange(event, course)}/></td>
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.abreviatedName}</td>
                                <td>{course.instructor}</td>
                                </tr>);
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default EnrollCourseView;