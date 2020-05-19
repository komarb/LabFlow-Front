import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Welcome from "./components/utils/Welcome";
import SubjectsList from "./components/subjects/SubjectsList";
import SubjectDetailed from "./components/subjects/SubjectDetailed";
import ReportCreation from "./components/reports/ReportCreation";
import TaskReports from "./components/reports/TaskReports";
import UserReports from "./components/reports/UserReports";
import NavBar from "./components/utils/NavBar";
import {PrivateRoute} from "./components/auth/PrivateRoute";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faQuestionCircle, faPlusSquare, faEye , faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import Profile from "./components/auth/Profile";

library.add(faClock, faQuestionCircle, faPlusSquare, faEye, faCheckCircle);
export default function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/signin" component={Login}/>
        <PrivateRoute path="/reports" component={UserReports}/>
        <PrivateRoute path="/subjects/:subjectID/tasks/:taskID/reports" component={TaskReports}/>
        <PrivateRoute path="/subjects/:subjectID/tasks/:taskID" component={ReportCreation}/>
        <PrivateRoute path="/subjects/:subjectID" component={SubjectDetailed}/>
        <PrivateRoute path="/subjects" component={SubjectsList}/>
        <PrivateRoute path="/profile" component={Profile}/>
        <Route path="/test">
          TEST!
        </Route>
      </Switch>
    </Router>
  );
}
