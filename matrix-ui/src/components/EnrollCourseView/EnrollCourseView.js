import './EnrollCourseView.css'
import {disenrollStudent, enrollStudent, getAllCourses, getStudentById} from "../../data/DataFunctions";
import {useState, useEffect} from "react";
import {useHistory, useLocation} from 'react-router-dom';

const EnrollCourseView = (props) => {

    const [studentLoading, setStudentLoading] = useState(true);
    const [coursesLoading, setCoursesLoading] = useState(true);
    const [currentStudent, setCurrentStudent] = useState({});

    const location = useLocation();
    const studentIdParam = new URLSearchParams(location.search).get("id");
    const selectedStudentId = studentIdParam != null ? studentIdParam : props.studentId;

    const history = useHistory();

    const getData = () => {
        getStudentById(selectedStudentId).then(
                response => {
                    setCurrentStudent(response.data)
                    setStudentLoading(false)
                    history.push(`/enroll?id=${selectedStudentId}`);
                }
            ).catch(
                error => console.log("Failed to fetch student!" + error)
            )

            getAllCourses().then(
                response => {
                    setAllCoursesList(response.data)
                    setCoursesLoading(false)
                }
            ).catch(
                error => console.log("Failed to fetch courses!" + error)
            )
        }

    useEffect(() => {getData()}, []);

    const [allCoursesList, setAllCoursesList] = useState([]);

    // Get all of the course id's the Student is enrolled in when the page initially loads.
    // Needs Student object of current selected Student. (currently mocked with 'currentStudent')
    const allDefaultEnrolledCourses = () => {

        if (!studentLoading) {
            return currentStudent.courses.map((course) => course.id);
        }
    };

    // Set whether this student is already enrolled in the current course (passed as the param)
    const setDefaultEnrollmentStatus = (course) => {
        if (!studentLoading) {
            return (allDefaultEnrolledCourses().some(enrolledCourseId => course.id === enrolledCourseId))
        }
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

            {/* Ensure that we don't try to load the page before we get the data... */}
            {(studentLoading || coursesLoading) && <p className="loadingMessage">The data is loading please wait...</p>}

            {/* Once we have the data, load the page... */}
            {!studentLoading && !coursesLoading &&
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
                                <td><input type="checkbox" defaultChecked={!!course.isEnrolled}
                                           onChange={(event) => onEnrollCheckChange(event, course)}/></td>
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.abreviatedName}</td>
                                <td>{course.instructor}</td>
                            </tr>);
                    })}
                </tbody>
            </table>
            }
        </div>
    );
}

export default EnrollCourseView;