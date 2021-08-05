



const EnrollCourseView = (props) => {

    const getAllCourses = [
        {id: 1, name: "Biology 1101", abreviatedName: "BIO-1101", instructor: "Chris Harsh"},
        {id: 2, name: "Biology 2101", abreviatedName: "BIO-2101", instructor: "Chris Harsh"},
        {id: 3, name: "Operating Systems 3001", abreviatedName: "OS-3001", instructor: "Aaron Little"},
        {id: 4, name: "Java Programming 2001", abreviatedName: "JAVA-2001", instructor: "Matt Thornfield"},
        {id: 5, name: "Java Programming 2501", abreviatedName: "JAVA-2501", instructor: "Matt Thornfield"},
        {id: 6, name: "C Programming 2002", abreviatedName: "CP-2002", instructor: "Amrita Goswami"},
        {id: 7, name: "C Programming 2502", abreviatedName: "CP-2502", instructor: "Amrita Goswami"}
        ];

    const [allCoursesWithCheckedStatus, setAllCoursesWithCheckedStatus] = getAllCourses.map((course) => ({...course, isEnrolled: false}));

    const onEnrollCheckChange = (event, course) => {
        console.log("Check box changed to " + event.target.checked, course)

        // event.target.check(!event.target.checked)
    }

    return (
        <div>
            <table className="courseViewTable">
                <thead>
                <tr>
                    <th>Enroll</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Abbreviated Name</th>
                    <th>Instructor</th>
                </tr>
                </thead>
                <tbody>
                        {
                            allCoursesWithCheckedStatus.map(course => {
                            return (
                                <tr key={course.id}>
                                <td><input type="checkbox" defaultChecked={!!course.isEnrolled} onChange={(event) => onEnrollCheckChange(event, course)}/></td>
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