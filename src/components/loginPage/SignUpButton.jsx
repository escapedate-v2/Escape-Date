import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpButton = props => {
  const navigate = useNavigate();
  return (
  <button className='signup' onClick={() => navigate('/newUser-Contacts')} aria-label = 'SignUpButton' > Sign me up please! </button>
  )
};

export default SignUpButton;