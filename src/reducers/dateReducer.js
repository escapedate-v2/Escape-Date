import * as types from '../actions/actionTypes';

const initialState = {
  hasSignedIn: false,
  logInError: false,
  emergencyContacts: [],
  primaryContact: null,
  phoneNumber: null,
  user_id: null,
  name: '',
  location: '',
  nameOfDate: '',
  timeOfDate: '',
  dateStatus: [{ user_id: 57, date_person: 'Trey', location: 'Hawaii', interval: '15', date: 'Mar 22' },
  { user_id: 57, date_person: 'George', location: 'Socal', interval: '20', date: 'Mar 25' },
  { user_id: 57, date_person: 'Jordan', location: 'Valley', interval: '25', date: 'Mar 24' },
  { user_id: 57, date_person: 'Ernest', location: 'Ernest\'s House', interval: '5', date: 'Mar 29' },
  { user_id: 57, date_person: 'Rankin', location: 'Northstar', interval: '60', date: 'Mar 27' }],
  interval: null,
};
// props.newDateInstance(date_person, location, interval, date);
//spin up an initial statye and create a fall through of reducers.a

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN: {
      console.log('action payload: ', action.payload)
      if (action.payload.error) {
        return {
          ...state,
          logInError: true
        }
      }

      else {
        console.log(4);
        let newDateStatus = [];
        // action.payload.data.dateData.forEach(date => {
        //   date.date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date.date);
        // })
        return {
          ...state,
          user_id: action.payload.data.userData[0].user_id,
          hasSignedIn: true,
          name: action.payload.data.userData[0].name,
          emergencyContacts: action.payload.data.contactData,
          phoneNumber: action.payload.data.userData[0].phone,
          dateStatus: action.payload.data.dateData,
        }
      }
    }

    case types.NEW_DATE_INSTANCE: {
      const { user_id, date_person, location, interval, date } = action.payload;
      const newDate = { user_id, date_person, location, interval, date };
      return {
        ...state,
        dateStatus: state.dateStatus.concat(newDate)
      }
    }
    default: {
      return state;
    }
  }
}
export default dateReducer;