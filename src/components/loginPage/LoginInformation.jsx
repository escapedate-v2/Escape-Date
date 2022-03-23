import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../errorPage/ErrorPage.jsx'; 
import 'regenerator-runtime/runtime';

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
  hasSignedIn
}) => {
  const navigate = useNavigate();

  
 return (
  <div className = 'form-container'>
    <form className = 'input-text' onSubmit = { (e) => {
      e.preventDefault();
      console.log(1);
//WE SHOULD HAVE USED COOKIES AND WE'RE SORRY// ALSO YOU HAVE TO LOG IN TWICE NBD JUST REAL SECURE//
      // new Promise((resolve, reject) => {
      //   return props.logIn(e);
      // })
      // .then(() => {
      //  if (props.hasSignedIn === true){
      //       console.log("WE MADE IT YAY")
      //       navigate('/newDate')
      //       return
      //     } else {
      //       console.log(props, 'error found')
      //       navigate('/errorPage')
      //       return
      //     } 
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      logIn(e);
      setTimeout(() => {
        console.log(5)
       if (hasSignedIn === true){
        navigate('/newDate')
      } else {
        navigate('/errorPage')
      }}, 1000);
      }} >
      <input type='text' aria-label='username' placeholder='username' />
      <input type='password' aria-label='password' placeholder='password' />
      <button aria-label='login'>login</button>
    </form>
  </div>
)
}

export default LoginInformation;