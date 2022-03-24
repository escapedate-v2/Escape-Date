import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { bindActionCreators } from 'redux';
// import { useNavigate } from 'react-router-dom'; 
import ErrorPage from '../components/errorPage/ErrorPage.jsx'; 
//may need to change directories for the following imports
import 'regenerator-runtime/runtime';
import LoginInformation from '../components/loginPage/LoginInformation.jsx';
import SignUpButton from '../components/loginPage/SignUpButton.jsx';


//two text inputs and a submit button. //create an onSubmit handler for the form that sets off our get request for username authentication.

const mapStateToProps = ({ dateState }) => ({
  hasSignedIn: dateState.hasSignedIn,
  emergencyContacts: dateState.emergencyContacts, 
  primaryContact: dateState.primaryContact, 
  name: dateState.name,
  logInError: dateState.logInError
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className = 'login-container' >
        <LoginInformation logIn={this.props.logIn} hasSignedIn = {this.props.hasSignedIn} emergencyContacts = {this.props.emergencyContacts} primaryContact = {this.props.primaryContact} name = {this.props.name} logInError = {this.props.logInError}/>
        <SignUpButton />
      </div>
    )
  }  
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
   