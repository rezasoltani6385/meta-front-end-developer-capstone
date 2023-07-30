import React, { useState, useContext } from 'react'

function BookingForm(props) {
    const updateTimes = props.updateTimes
    const dispatch = props.dispatch
    const [data, setData] = useState({date: '', time: '', guests: '', occasion: ''})

    const handleDateChange = (event) => {
        const selectedDate = event.target.value; // Get the selected date from the form field
        const newAvailableTimes = updateTimes(selectedDate);
        // Dispatch the state change
        // You may need to add a type property to your action to distinguish this update
        dispatch({ type: 'UPDATE_AVAILABLE_TIMES', payload: newAvailableTimes });
    };

    const handlesetData =  (evt)=>{
        evt.preventDefault()
        setData({...data, [evt.target.id] : evt.target.value})
    }

  return (
    <htmlForm style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
        <label htmlFor="date">Choose date</label>
            <input type="date" id="date" onChange={handleDateChange}/>
        <label htmlFor="time">Choose time</label>
        <select id="time" onChange={handlesetData}>
            {updateTimes.map ((updateTime, index)=>(
                <option key={index}>{updateTime}</option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handlesetData}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={handlesetData}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" onClick={()=>console.log(data)} />
    </htmlForm>
  )
}

export default BookingForm
