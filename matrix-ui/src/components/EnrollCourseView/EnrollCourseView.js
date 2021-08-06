import './EnrollCourseView.css'
import {disenrollStudent, enrollStudent} from "../../data/DataFunctions";

const EnrollCourseView = () => {

    // TODO This needs to be passed in props or loaded. Then delete this line
    // mocked current Student data
    const currentStudent = {id: "1", firstName: "AJ", lastName: "Colby", grade: "Freshman", courses: [{id: 3},{id: 4}]};

    // TODO This needs to be passed in props or loaded. Then delete this line
    // mocked current list of all available courses
    const getAllCourses = [
        {id: 1, name: "Biology 1101", abreviatedName: "BIO-1101", instructor: "Chris Harsh"},
        {id: 2, name: "Biology 2101", abreviatedName: "BIO-2101", instructor: "Chris Harsh"},
        {id: 3, name: "Operating Systems 3001", abreviatedName: "OS-3001", instructor: "Aaron Little"},
        {id: 4, name: "Java Programming 2001", abreviatedName: "JAVA-2001", instructor: "Matt Thornfield"},
        {id: 5, name: "Java Programming 2501", abreviatedName: "JAVA-2501", instructor: "Matt Thornfield"},
        {id: 6, name: "C Programming 2002", abreviatedName: "CP-2002", instructor: "Amrita Goswami"},
        {id: 7, name: "C Programming 2502", abreviatedName: "CP-2502", instructor: "Amrita Goswami"}
        ];

    // Get all of the course id's the Student is enrolled in when the page initially loads.
    // Needs Student object of current selected Student. (currently mocked with 'currentStudent')
    const allDefaultEnrolledCourses = currentStudent.courses.map((course) => course.id);

    // Set whether this student is already enrolled in the current course (passed as the param)
    const setDefaultEnrollmentStatus = (course) => {
        return (allDefaultEnrolledCourses.some(enrolledCourseId => course.id === enrolledCourseId))
    }

    // Iterate over the list of all available courses and set their defaulted enrollment status
    const allCoursesWithEnrollStatus = getAllCourses.map((course) => ({...course, isEnrolled: setDefaultEnrollmentStatus(course)}));

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