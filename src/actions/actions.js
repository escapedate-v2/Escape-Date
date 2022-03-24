import * as types from './actionTypes'; 
import axios from 'axios';


//make our action objects;


export const logIn = (e) => dispatch => {
  const username = e.target[0].value, password = e.target[1].value;
  axios.post('http://localhost:3000/login',
  { username, password })
  .then((data) => {
    dispatch({
        type: types.LOG_IN,
        payload: data,
    });
})};
{/* <input type = 'text' placeholder = 'username'/>
<input type = 'text' placeholder = 'password'/>
<input type = 'text' placeholder = 'name'/>
<input type = 'text' placeholder = 'phone'/>
<input type = 'text' placeholder = 'emergency name 1'/>
<input type = 'text' placeholder = 'emergency number 1'/>
<input type = 'text' placeholder = 'emergency name 2'/>
<input type = 'text' placeholder = 'emergency number 2'/>
<input type = 'text' placeholder = 'emergency name 3'/>
<input type = 'text' placeholder = 'emergency number 3'/> */}
export const signUp = (e) => dispatch => {
  console.log('here is hitting the front end before fetch ', e)
  const username = e.target[0].value;
  const password = e.target[1].value;
  const name = e.target[2].value;
  const phone = e.target[3].value;
  const em1_name = e.target[4].value;
  const em1_phone = e.target[5].value;
  const em2_name = e.target[6].value;
  const em2_phone = e.target[7].value;
  const em3_name = e.target[8].value;
  const em3_phone = e.target[9].value;
  axios.post('/session/newUser',
  { username, password, name, phone, em1_name, em1_phone, em2_name, em2_phone, em3_name, em3_phone })
  .then(data => {
    console.log(data);
    dispatch({
      type: types.SIGN_UP,
      payload: data
    })
  })
}

export const newDateInstance = (e) => dispatch => {
    const location = e.target[0].value; 
    const interval = e.target[1].value; 
    const primaryContact = e.target[2].value; 
    const time = e.target[3].value; 
    const nameOfDate = e.target[4].value;
    const date = e.target[5].value; 
    axios.post('http://localhost:3000/newDateInstance', 
    {location, interval, primaryContact, time, nameOfDate, date})
    .then(data => {
      console.log(data); 
      dispatch({
        type: types.NEW_DATE_INSTANCE,
        payload: { location, interval, primaryContact, time, nameOfDate, date }
      })
    })
}