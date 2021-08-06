import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <ul className="nav">
            <li><Link to="/find">Find Student</Link></li>
            <li><Link to="/find">Find Course</Link></li>
            <li><Link to="/addStudent">Add Student</Link></li>
            <li><Link to="/addCourse">Add Course</Link></li>
            <li><Link to="/enroll">Enroll Student to a course</Link></li>
        </ul>
    );
}

export default Menu;