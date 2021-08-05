import logo from './logo.svg';
import './App.css';
import EnrollCourseView from "./components/EnrollCourseView/EnrollCourseView";
import StudentList from './StudentList';
//Search
// 1. page -> display student list
// 2. page -> display course List

//3. page - add student
//4.Enroll Student to a course
    //Search by Student ==> it display the list of courses
    // Enroll button => display the remaining course => then user can add the student to any of the displayed course.
//Enroll


function App() {
  return (
    <div className="App">
      {/*<EnrollCourseView/>*/}
     <StudentList/>
    </div>
  );
}

export default App;
