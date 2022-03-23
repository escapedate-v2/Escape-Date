import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import { bindActionCreators } from 'redux';


// const mapStateToProps = ({ dateState : { location, nameOfDate, timeOfDate, dateStatus, primaryContact, interval } }) => (
//    {
//     location,
//     nameOfDate,
//     timeOfDate, 
//     dateStatus,
//     primaryContact,
//     interval,
//     }
// );

// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const DateInstance = props => {
    
    return  (
        <div>
            <form className = 'date-input' onSubmit = {(e) => {
                e.preventDefault(),
                props.newDateInstance(e); 
            }}>
                <input type ='text' placeholder = 'location'/>
                <input type ='text' placeholder = 'interval'/>
                <input type ='text' placeholder = 'alert whom'/>
                <input type ='text' placeholder = 'time'/>
                <input type ='text' placeholder = 'name of date'/>
                <button>Submit</button>
            </form>
        </div>
    );
}


//export default connect(mapStateToProps, mapDispatchToProps)(DateInstance);
export default DateInstance;