import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { bindActionCreators } from 'redux';
import DateInstance from '../components/datePage/DateInstance.jsx';
import DateInfo from '../components/datePage/DateInfo.jsx'


const mapStateToProps = ({ dateState: { location, user_id, nameOfDate, timeOfDate, dateStatus, primaryContact, interval } }) => (
  {
    location,
    user_id,
    nameOfDate,
    timeOfDate,
    dateStatus,
    primaryContact,
    interval,
  }
);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     newDateInstance: (userId) => dispatch(actions.newDateInstance(userId)),
//     deleteDateInstance: (dateId) => dispatch(actions.deleteDateInstance(dateId))
//   }
// }

const dateMaker = (dateStatus, user_id, i, deleteDateInstance) => (
  <DateInfo user_id = {user_id} dateStatus = {dateStatus} deleteDateInstance = {deleteDateInstance} key={i}/>
);


class DateContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let dateInfoArray = [];
    for (let i = 0; i < this.props.dateStatus.length; i++) {
      dateInfoArray.push(dateMaker(this.props.dateStatus[i], this.props.user_id, i, this.props.deleteDateInstance))
    }
    return (
      <div className='login-container'>
        <h2>New date: </h2>
        <DateInstance
          user_id = {this.props.user_id}
          newDateInstance={this.props.newDateInstance}
          location={this.props.location}
          nameOfDate={this.props.nameOfDate}
          timeOfDate={this.props.timeOfDate}
          dateStatus={this.props.dateStatus}
          primaryContact={this.props.primaryContact}
          interval={this.props.interval}
        />
        <div className='date-information'>
          <h2>Upcoming dates:</h2>
          <div className='date-information-cards'>{dateInfoArray}</div>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DateContainer);