import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import SignUpPage from '../components/signupPage/SignUpPage.jsx'

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='signup-container'>
        <SignUpPage signUp = {this.props.signUp} />
      </div>
    )
  }
}


export default connect(null, mapDispatchToProps)(SignUpContainer);