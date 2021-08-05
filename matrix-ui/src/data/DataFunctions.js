import axios from 'axios';


export const addNewTransaction = (student) =>{
    return  axios ({url: "http://localhost:8080/api/student/addStudent",
        method: "POST",
        headers: {'Accept':'application/json', 'Content-Type':'application/json'},
        data: student});


}