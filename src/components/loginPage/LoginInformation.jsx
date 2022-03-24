import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../errorPage/ErrorPage.jsx';
import 'regenerator-runtime/runtime';
import { useCookies } from 'react-cookie';

//two text inputs and a submit button. //create an onSubmit handler for the form that sets off our get request for username authentication.

// const mapStateToProps = ({ dateState }) => ({
//   hasSignedIn: dateState.hasSignedIn,
//   emergencyContacts: dateState.emergencyContacts, 
//   primaryContact: dateState.primaryContact, 
//   name: dateState.name
// })

// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
// our login take username and password.



const LoginInformation = ({
  logIn,
  hasSignedIn,
  logInError
}) => {

  // const [cookies, setCookie] = useCookies(['name']);
  const navigate = useNavigate();
  // setCookie('name', 'meow', { path: '/' });
  // console.log(cookies.name)

  // if (cookies.name === 'meoww') navigate('/newDate');
  // else navigate('/errorPage');

  // declare a function that takes in a boolean input
    // if the input is true, return a string that indicates 'Sorry, your login information is incorrect. Please try again'
    // if the input is false, return a an empty string
  const loginCheck = loginInfo => {
    if (loginInfo) {
      return 'Sorry, your login information is incorrect. Please try again.'
    }
    else if (!loginInfo){
      return ''
    }
  }
  if (hasSignedIn) navigate('/newDate');
  
  return (
    <div className='form-container'>
      <form className='input-text' onSubmit={(e) => {
        e.preventDefault();
        logIn(e)
      }}>
        <p>{loginCheck(logInError)}</p>
        <input type='text' aria-label='username' placeholder='username' />
        <input type='password' aria-label='password' placeholder='password' />
        <button aria-label='login'>login</button>
      </form>
    </div>
  )
}

export default LoginInformation;