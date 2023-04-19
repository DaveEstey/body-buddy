"use client";
import React from 'react'

const WorkoutEditCard = (props) => {
  const {name, index, sets, reps, handleSetChange, handleRepChange} = props

  const inputStyle = {
    width: `${Math.max(7)}ch`,
  };

  return (
    <>
        <div className="exercise-card-container">
        <div className="exercise-card">
          <h1>{name}</h1>
          <h2>sets: {sets}</h2>
          <input style={inputStyle} index={index} type="number" value={sets} onChange={(e) => handleSetChange(e, index)}/>
          <h2>reps:</h2>
          <input style={inputStyle} index={index}  type="number" value={reps} onChange={(e) => handleRepChange(e, index)}/>
        </div>
      </div>
    </>
  )
}

export default WorkoutEditCard
