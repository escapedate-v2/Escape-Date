import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import { useCookies } from 'react-cookie';

const LoginInformation = ({
  logIn,
  hasSignedIn,
  logInError
}) => {

  const [cookies, setCookie] = useCookies(['loggedIn']);
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
    else if (!loginInfo) {
      return ''
    }
  }
  useEffect(() => {
    if (hasSignedIn) navigate('/newDate')

  },[hasSignedIn])

  return (
    <div className='form-container'>
      <form className='input-text' onSubmit={async (e) => {
        e.preventDefault();
        await logIn(e);
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
