import React from 'react';

const DateInstance = props => {

  return (
    <div>
      <form className='date-input' onSubmit={(e) => {
        e.preventDefault();
        const user_id = props.user_id;
        const date_person = e.target[0].value;
        const location = e.target[1].value;
        const interval = e.target[2].value;
        const date = new Date(e.target[3].value).getTime();
        console.log(user_id, date_person, location, interval, date);
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

export default DateInstance;