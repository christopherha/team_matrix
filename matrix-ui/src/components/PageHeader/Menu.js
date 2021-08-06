import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <ul className="nav">
            <li><Link to="/listStudents">Show Students</Link></li>
            <li><Link to="/listCourses">Show Courses</Link></li>
            <li><Link to="/addStudent">Add Student</Link></li>
            <li><Link to="/addCourse">Add Course</Link></li>
        </ul>
    );
}

export default Menu;