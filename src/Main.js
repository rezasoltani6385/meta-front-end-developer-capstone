import React, {useState, useReducer} from 'react'
import BookingForm from './BookingForm'

// const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const initialState = fetchAPI(new Date())


function timeReducer(state, action) {
  switch (action.type) {
    // Add more cases here if needed in the future
    default:
      return state;
  }
}
function Main() {

  const [availableTimes, dispatch] = useReducer(timeReducer, initialState);
  
  console.log(initialState)

  const updateTimes = () => {
    // You can implement the logic here to update availableTimes based on the selectedDate
    // For now, just return the same available times
    return initialState;
  };

  return (
    <div>
      <BookingForm updateTimes={updateTimes()} dispatch={dispatch} />
    </div>
  )
}

export default Main
