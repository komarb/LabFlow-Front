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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faQuestionCircle, faPlusSquare, faEye } from '@fortawesome/free-regular-svg-icons'

library.add(faClock, faQuestionCircle, faPlusSquare, faEye);
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/auth" component={Login}/>
        <Route path="/subjects/:subjectID/tasks/:taskID/reports" component={TaskReports}/>
        <Route path="/subjects/:subjectID/tasks/:taskID" component={ReportCreation}/>
        <Route path="/subjects/:subjectID" component={SubjectDetailed}/>
        <Route path="/subjects" component={SubjectsList}/>
        <Route path="/test">
          TEST!
        </Route>
      </Switch>
    </Router>
  );
}
