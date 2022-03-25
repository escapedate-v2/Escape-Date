import React from 'react';

const DateInfo = ({user_id, dateStatus, deleteDateInstance}) => {
  console.log(dateStatus.date)
  const newDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(dateStatus.date);
  return (
    <div className='date-info-card'>
      <div className='date-info-name'>
        <h3>{dateStatus.date_person}</h3>
        <button onClick={() => deleteDateInstance(user_id, dateStatus.date_id)}>X</button>
      </div>
      <div className='date-info-field'>
        <h4>Date location: </h4>
        <span>{dateStatus.location}</span>
      </div>
      <div className='date-info-field'>
        <h4>Alert interval: </h4>
        <span>{dateStatus.interval}</span>
      </div>
      <div className='date-info-field'>
        <h4>Time of date: </h4>
        <span>{newDate}</span>
      </div>
    </div>
  );
}

export default DateInfo;