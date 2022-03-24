import * as types from '../actions/actionTypes';

const initialState = {
    hasSignedIn: false,
    logInError: false,
    emergencyContacts: [],
    primaryContact: null, 
    phoneNumber: null,
    name : '',
    location: '',
    nameOfDate: '',
    timeOfDate: '',
    dateStatus: null, 
    interval: null,
  };

//spin up an initial statye and create a fall through of reducers.a

const dateReducer = ( state = initialState, action) => {
  switch(action.type) {
    case types.LOG_IN : {
      if (!action.payload.data.err){
      const arr = [];
      console.log(4);
      for (let i = 1; i <= 3; i++){
        arr.push({name: action.payload.data[`em${i}_name`], phone: action.payload.data[`em${i}_phone`] })
      }
      
        return {
          ...state,
          hasSignedIn: true,
          name: action.payload.data.name,
          emergencyContacts: arr,
          phoneNumber: action.payload.data.phone
        }
      }
      else {
        return {
          ...state,
          logInError: true

        }
      }
    }
    
    case types.NEW_DATE_INSTANCE : {
      const { location, nameOfDate, timeOfDate, dateStatus, primaryContact, interval } = action.payload;
      return {
        ...state,
        location, 
        nameOfDate, 
        timeOfDate, 
        dateStatus, 
        primaryContact, 
        interval
      }
    }
    default: {
      return state;
    }
  }
}
export default dateReducer;