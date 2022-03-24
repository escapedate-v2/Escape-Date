import * as types from './actionTypes';
import axios from 'axios';

//make our action objects;


export const logIn = (e) => dispatch => {
  const username = e.target[0].value, password = e.target[1].value;
<<<<<<< HEAD

  console.log(2);
  axios.post('/login', { username, password })
    .then((data) => {
      console.log(3);
      console.log(data);
      dispatch({
=======
  axios.post('http://localhost:3000/login',
  { username, password })
  .then((data) => {
    dispatch({
>>>>>>> dev
        type: types.LOG_IN,
        payload: data,
      });
    })
    .catch(err => console.log(err))
};

export const signUp = (username, password, name, phone, em1_name, em1_phone, em2_name, em2_phone, em3_name, em3_phone) => dispatch => {
  // console.log('variables coming into signUp: ', username, password, name, phone, em1_name, em1_phone, em2_name, em2_phone, em3_name, em3_phone)
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

export const newDateInstance = (user_id, date_person, location, interval, date) => dispatch => {
  console.log('variables coming into newDateInstance: ', user_id, date_person, location, interval, date)
  axios.post('http://localhost:3000/newDateInstance',
    { user_id, date_person, location, interval, date })
    .then(data => {
      console.log(data);
      dispatch({
        type: types.NEW_DATE_INSTANCE,
        payload: { location, interval, primaryContact, time, nameOfDate, date }
      })
    })
}