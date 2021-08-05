import './AddStudent.css';
import {useReducer, useState} from "react";
import {addNewstudent} from "../../data/DataFunctions";

const AddStudent = () => {

    const initialNewTransactionState = {firstName : "", lastName:"", grade : ""};

    const [message, setMessage] = useState("");

    const formReducer = (state, data) => {
        return {
            ...state,
            [data.field]: data.value
        };
    }

    const [newStudent, dispatch] = useReducer(formReducer , initialnewStudentState);


    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("saving.....");
        console.log(newStudent);
        const response = addNewstudent(newStudent);
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

    const {orderId, date,  amount , country, currency, taxCode, taxRate, type} = newTransaction;

    return (
        <form className="addStudentForm" onSubmit={handleSubmit}>
            <h2>New Student</h2>
            <label htmlFor="firstName">Order Id</label>
            <input type="text" id="firstName"  value={firstName} onChange={handleChange} />
            <br/>
            <label htmlFor="firstName">Order Id</label>
            <input type="text" id="firstName"  value={lastName} onChange={handleChange} />
            <br/>
            <label htmlFor="firstName">Order Id</label>
            <input type="text" id="firstName"  value={grade} onChange={handleChange} />
            <br/>
            <br/>
            <button type="submit">Save</button>
            <div className="addTransactionMessage">{message}</div>
        </form>
    );
}

export default AddStudent;
