import logo from './logo.svg';
import './App.css';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
