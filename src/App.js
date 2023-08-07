import React from "react";
import "./App.css";
// import Routes from "./core/routes/index";
import { BrowserRouter as Router, Route, Switch ,Routes } from 'react-router-dom';
import Signin from "./components/signin/signin";
import Intro from "./components/intro/intro";
import SignUp from "./components/signup/signup";
import MainContent from "./components/mainContent/mainContent";
import EmployeeList from "./components/employeeList/employeeList";
import EditEmployee from "./components/editEmployee/editEmployee";
import Project from "./components/project/project";

// import CheckMail from './modules/checkmail';

function App() {
  return (
    <>
    <div className="main">
        <Router>
        <Routes>
          <Route path="/s" element={<Signin />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/home" element={<MainContent />}></Route>
          <Route path="/employees/all" element={<EmployeeList />}></Route>
          <Route path="/employees/edit" element={<EditEmployee />}></Route>
          <Route path="/employees/add" element={<EditEmployee />}></Route>
          <Route path="/projects" element={<Project />}></Route>



          <Route path="/" element={<MainContent />}></Route>

          </Routes>
      </Router>
      </div>

      {/* <CheckMail /> */}
    </>
  );
}

export default App;
