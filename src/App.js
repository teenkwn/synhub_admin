import './App.css';
import React from "react";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Userlist from './Pages/Userlist';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./auth";
import PrivateRoute from './PrivateRoute';

// import './Pages/Dashboard';
// import './Pages/TimeAttendance';
// import './Pages/NewEmploy';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <PrivateRoute exact path="/" component={Dashboard}/>
          <Route path="/login" exact component={Login} />
          {/* <Route path="/dashboard" exact component={Dashboard} /> */}
          <Route path="/userlist" exact component={Userlist}/>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
