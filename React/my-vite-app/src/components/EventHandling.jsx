import React from 'react'

const EventHandling = () => {
    const handleEvent = () => alert("Ohh yess !!")
  return (
    <div className="event-container">
        <h4 className="event-title">This is EventHandling Function Component</h4>
        <button className="event-btn" onClick={handleEvent} aria-label="trigger alert">Click Me</button>
    </div>
  )
}

export default EventHandling