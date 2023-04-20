"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";

const WorkoutEditCard = (props) => {
  const {
    name,
    index,
    sets,
    reps,
    weight,
    handleSetChange,
    handleRepChange,
    handleWeightChange,
    handleDeleteCard,
  } = props;

  const inputStyle = {
    width: `${Math.max(7)}ch`,
  };

  return (
    <>
      <div className="exercise-card-container">
        <div className="exercise-card">
          <h1>{name}</h1>
          <h2>sets: {sets}</h2>
          <input
            style={inputStyle}
            index={index}
            type="number"
            value={sets}
            onChange={(e) => handleSetChange(e, index)}
          />
          <h2>reps:</h2>
          <input
            style={inputStyle}
            index={index}
            type="number"
            value={reps}
            onChange={(e) => handleRepChange(e, index)}
          />
          <h2>weight:</h2>
          <input
            style={inputStyle}
            index={index}
            type="number"
            value={weight}
            onChange={(e) => handleWeightChange(e, index)}
          />
          <div index={index} onClick={() => handleDeleteCard(index)}>
            <FaTimes size={20} style={{ color: "#000" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutEditCard;
