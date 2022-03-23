import React from 'react';
import LoginContainer from './containers/LoginContainer.jsx';
import logo from '../Images/Axolotl.png';
import SignUpPage from './components/signupPage/SignUpPage.jsx';
import DateInstance from './components/datePage/DateInstance.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/errorPage/ErrorPage.jsx'; 
//import { connect } = 'react-redux';


const MainContainer = props => (
  <div className = 'container'>
    <div className = 'logo'><img src={logo} alt = 'Logo'/></div>
    <h1>Escape Date</h1>
      <Router>
        <Routes>
          <Route path = '/' element={<LoginContainer/>}/>
          <Route path = '/newUser-Contacts' element = {<SignUpPage />}/>
          <Route path = '/newDate' element = {<DateInstance />}/>
          <Route path = '/errorPage' element = {<ErrorPage/>}/>
        </Routes>
      </Router>
  </div>
)

export default MainContainer;