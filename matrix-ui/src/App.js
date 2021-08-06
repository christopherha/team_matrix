import './App.css';
import EnrollCourseView from "./components/EnrollCourseView/EnrollCourseView";
import StudentList from './StudentList';
import AddStudent from "./components/AddStudent/AddStudent";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import AddCourse from "./components/AddCourse/AddCourse";
import Student from "./components/Student/Student";


function App() {
  return (

    <BrowserRouter>
        <div className="App">
            <PageHeader/>
             <Switch>
                <Route path="/find" exact={true}>
                    <Student/>
                </Route>
                <Route path="/addStudent" exact={true}>
                    <AddStudent/>
                </Route>
                 <Route path="/addCourse" exact={true}>
                    <AddCourse/>
                </Route>
                 <Route path={["/enroll", "/enroll/:id"]} exact={true}>
                     <EnrollCourseView studentId="1"/>
                 </Route>
                 <Route path="/" exact={true}>
                 </Route>
                <Route>
                    <PageNotFound/>
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
