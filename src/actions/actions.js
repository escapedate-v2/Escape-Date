import * as types from './actionTypes';
import axios from 'axios';

//make our action objects;


export const logIn = (e) => dispatch => {
  const username = e.target[0].value, password = e.target[1].value;
  console.log(2);
  axios.post('http://localhost:3000/login', { username, password })  
    .then((data) => {
      console.log(3);
      dispatch({
        type: types.LOG_IN,
        payload: data,
      });
    })
    .catch(err => dispatch({
      type: types.LOG_IN,
      payload: {error: err},
    }))
};

export const signUp = (username, password, name, phone, em1_name, em1_phone, em2_name, em2_phone, em3_name, em3_phone) => dispatch => {
  // console.log('variables coming into signUp: ', username, password, name, phone, em1_name, em1_phone, em2_name, em2_phone, em3_name, em3_phone)
  axios.post('http://localhost:3000/newuser',
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
  console.log('variables coming into newdate: ', user_id, date_person, location, interval, date)
  axios.post('http://localhost:3000/newdate',
    { user_id, date_person, location, interval, date })
    .then(data => {
      dispatch({
        type: types.NEW_DATE_INSTANCE,
        payload: { location, interval, date_person, date }
      })
    })
}
//similar to date newDateInstance however we would only need date_person, user_id
export const deleteDateInstance = (user_id, date_id) => dispatch => {
  console.log('deleting date instance: ', user_id, date_id)
  //axios delete request below may need to be revised
  axios.delete('http://localhost:3000/deletedate',
    { user_id, date_id })
    .then(data => {
      console.log(data);
      dispatch({
        type: types.DELETE_DATE_INSTANCE,
        payload: data
      })
    })
}