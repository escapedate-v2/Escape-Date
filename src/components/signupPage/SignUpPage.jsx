import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import { bindActionCreators } from 'redux'; 
import { useNavigate } from 'react-router-dom';
//import { getState } from 'redux-thunk';

//const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
      

const SignUpPage = props => {
  const navigate = useNavigate();
  return (
  <div className = 'form-container'>
    <form className = 'sign-up-form' onSubmit = {(e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const name = e.target[2].value;
    const phone = e.target[3].value; //NUMBER
    //const em1_name = \0-9/.(e.target[i].value)
    const em1_name = e.target[4].value;
    const em1_phone = e.target[5].value;//NUMBER
    const em2_name = e.target[6].value;
    const em2_phone = e.target[7].value;//NUMBER
    const em3_name = e.target[8].value;
    const em3_phone = e.target[9].value;//NUMBER
    props.signUp(username, password, name, phone, em1_name, em1_phone, em2_name, em2_phone, em3_name, em3_phone);
    navigate('/');
    // const myState = store.getState();
    // console.log(myState);
    }}>
        <input type = 'text' placeholder = 'username'/>
        <input type = 'password' placeholder = 'password'/>
        <input type = 'text' placeholder = 'name'/>
        <input type = 'number' placeholder = 'phone'/>
        <input type = 'text' placeholder = 'emergency name 1'/>
        <input type = 'number' placeholder = 'phone number 1'/>
        <input type = 'text' placeholder = 'emergency name 2'/>
        <input type = 'number' placeholder = 'phone number 2'/>
        <input type = 'text' placeholder = 'emergency name 3'/>
        <input type = 'number' placeholder = 'phone number 3'/>
        <button>Submit</button>
    </form >
  </div>
)};

//export default connect(null, mapDispatchToProps)(SignUpPage);
export default SignUpPage;