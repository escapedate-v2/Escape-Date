import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions.js';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';


const SignUpButton = props => {
  const navigate = useNavigate();
  return (
  <button onClick={() => navigate('/newUser-Contacts')} aria-label = 'SignUpButton' > Sign me up please! </button>
  )
};




export default SignUpButton;