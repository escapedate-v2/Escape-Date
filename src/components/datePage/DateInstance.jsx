import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import { bindActionCreators } from 'redux';


const DateInstance = props => {

  return (
    <div>
      <form className='date-input' onSubmit={(e) => {
        e.preventDefault();
        //setting dummy value before we tie with our backend
        const user_id = 44;
        //setting dummy value before we...
        console.log(new Date(e.target[3].value).getTime())
        const date_person = e.target[0].value;
        const location = e.target[1].value;
        const interval = e.target[2].value;
        const date = new Date(e.target[3].value).getTime(); // ACTUALLY NEEDS TO BE USER-SELECTED
        props.newDateInstance(user_id, date_person, location, interval, date);
      }}>
        <input type='text' placeholder='Who is your date?' />
        <input type='text' placeholder='Where are you going?' />
        <input type='number' placeholder='Check-In Frequency' />
        <label>When is your date?
          <input type='datetime-local' placeholder='When the date begins' />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

// Declare variables that will capture values from the input fields
//call the new date instance function



export default DateInstance;