import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddStudentComponent from './components/Student/AddStudentComponent';
import Faculty_main from './components/Faculty/Faculty_main';
import Student_main from './components/Student/Student_main';
//import Landing_page from './components/Home_page';
import ViewStudentComponent from './components/Student/ViewStudentComponent';
import AddFaculty from './components/Faculty/AddFaculty';
import ViewFaculty from './components/Faculty/ViewFaculty';
import Login from './components/Login';

function App() {
  return (
        <Router>
          <div className = "container">
            <Switch>
                {/* <Route path="/" exact component={Landing_page}></Route> */}
                <Route path="/" exact component={Login}></Route>
                <Route path="/faculty" exact component={Faculty_main}></Route>
                <Route path="/Student" component={Student_main}></Route>
                <Route path="/add-student/:id" component={AddStudentComponent}></Route>
                <Route path="/add-faculty/:id" component={AddFaculty}></Route>
                <Route path="/view-student/:id" component={ViewStudentComponent}></Route>
                <Route path="/view-faculty/:id" component={ViewFaculty}></Route>
            </Switch>
          </div>
        </Router>
  );
}

export default App;
