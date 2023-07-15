import React, { useState } from 'react'

function BookingForm() {
    const [data, setData] = useState({date: '', time: '', guests: '', occasion: ''})

    const handlesetData =  (evt)=>{
        evt.preventDefault()
        setData({...data, [evt.target.id] : evt.target.value})
    }
  return (
    <htmlForm style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
        <label htmlFor="date">Choose date</label>
            <input type="date" id="date" onChange={handlesetData}/>
        <label htmlFor="time">Choose time</label>
        <select id="time" onChange={handlesetData}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>  
            <option>22:00</option>
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
