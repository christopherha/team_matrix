import './AddCourse.css';
import {useReducer, useState} from "react";
import {addNewCourse} from "../../data/DataFunctions";

const AddCourse = () => {

    const initialNewCourseState = {firstName : "", lastName:"", grade : ""};

    const [message, setMessage] = useState("");

    const formReducer = (state, data) => {
        return {
            ...state,
            [data.field]: data.value
        };
    }

    const [newCourse, dispatch] = useReducer(formReducer , initialNewCourseState);


    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("saving.....");
        console.log(newCourse);
        const response = addNewCourse(newCourse);
        response.then(
            result => {
                if (result.status === 200) {
                    setMessage("New Course added");
                }
                else {
                    setMessage("Something went wrong - error code was " + result.status );
                }
            }
        )
            .catch(error => console.log("Something went wrong ", error));
    }

    const handleChange = (event) => {
        dispatch( {field : event.target.id, value : event.target.value});
    }

    const {abreviatedName, name,  instructor} = newCourse;

    return (
          <form className="addCourseForm" onSubmit={handleSubmit}>
            <h2>New Course</h2>
            <label htmlFor="abreviatedName">Abbreviated Name</label>
            <input type="text" id="abreviatedName"  value={abreviatedName} onChange={handleChange} />
            <br/>
            <label htmlFor="name">Course Name</label>
            <input type="text" id="name"  value={name} onChange={handleChange} />
            <br/>
            <label htmlFor="instructor">Instructor</label>
            <input type="text" id="instructor"  value={instructor} onChange={handleChange} />
            <br/>
            <br/>
            <button type="submit">Save</button>
            <div className="addCourseMessage">{message}</div>
        </form>
    );
}

export default AddCourse;
