import './AddStudent.css';
import {useReducer, useState} from "react";
import {addNewStudent} from "../../data/DataFunctions";

const AddStudent = () => {

    const initialNewStudentState = {firstName : "", lastName:"", grade : ""};

    const [message, setMessage] = useState("");

    const formReducer = (state, data) => {
        return {
            ...state,
            [data.field]: data.value
        };
    }

    const [newStudent, dispatch] = useReducer(formReducer , initialNewStudentState);


    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("saving.....");
        console.log(newStudent);
        const response = addNewStudent(newStudent);
        response.then(
            result => {
                if (result.status === 200) {
                    setMessage("New Student added");
                }
                else {
                    setMessage("Something went wrong - error code was " + result.status );
                }
            }
        )
            .catch(error => console.log("something went wrong ", error));
    }

    const handleChange = (event) => {
        dispatch( {field : event.target.id, value : event.target.value});
    }

    const {firstName, lastName,  grade} = newStudent;

    return (
          <form className="addStudentForm" onSubmit={handleSubmit}>
            <h2>New Student</h2>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName"  value={firstName} onChange={handleChange} />
            <br/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName"  value={lastName} onChange={handleChange} />
            <br/>
            <label htmlFor="grade">Grade</label>
            <input type="text" id="grade"  value={grade} onChange={handleChange} />
            <br/>
            <br/>
            <button type="submit">Save</button>
            <div className="addStudentMessage">{message}</div>
        </form>
    );
}

export default AddStudent;
