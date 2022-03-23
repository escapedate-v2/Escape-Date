import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { bindActionCreators } from 'redux';
import DateInstance from '../components/datePage/DateInstance.jsx';


const mapStateToProps = ({ dateState: { location, nameOfDate, timeOfDate, dateStatus, primaryContact, interval } }) => (
  {
    location,
    nameOfDate,
    timeOfDate,
    dateStatus,
    primaryContact,
    interval,
  }
);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class DateContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='login-container'>
        <DateInstance
          newDateInstance={this.props.newDateInstance}
          location={this.props.location}
          nameOfDate={this.props.nameOfDate}
          timeOfDate={this.props.timeOfDate}
          dateStatus={this.props.dateStatus}
          primaryContact={this.props.primaryContact}
          interval={this.props.interval}
        />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DateContainer);