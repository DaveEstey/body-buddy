"use client";

import { useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import Hero from "../assets/barbell.jpg";
import "./WorkoutStyles.css";
import Image from "next/image";
import WorkoutEditCard from "../components/WorkoutEditCard";
import { NextResponse } from "next/server";

const WorkoutPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repo, setRepo] = useState([]);
  const [formData, setFormData] = useState([]);
  const [buttonShow, showButton] = useState(null);
  const [workoutTitle, setWorkoutTitle] = useState("");

  const handleSearch = async () => {
    if (!searchInput) return;
    const userInput = searchInput.trim();
    const data = await fetch(
      `https://api.api-ninjas.com/v1/exercises?muscle=${userInput}`,
      {
        headers: { "X-Api-Key": "WGoyifcVpn2C4Xum3XF7uw==zYQeXPtUXguKkvSj" },
      }
    );
    const repoData = await data.json();
    setRepo(repoData);
  };

  const handleCardClick = async (data) => {
    setFormData([...formData, { name: data, sets: 0, reps: 0 }]);
  };

  const handleSetChange = (e, index) => {
    const newFormData = JSON.parse(JSON.stringify(formData));
    newFormData[index].sets = Number(e.target.value);
    setFormData(newFormData);
  };

  const handleRepChange = (e, index) => {
    const newFormData = JSON.parse(JSON.stringify(formData));
    newFormData[index].reps = Number(e.target.value);
    setFormData(newFormData);
  };

  const handleWorkoutSubmit = async () => {
    try {
      const res = await fetch("/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: workoutTitle,
          exercises: formData,
          userId: "643c2fd2b8b809c22b6cc7f2",
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    console.log(formData);
    console.log(JSON.stringify(formData));
  };

  return (
    <div className="workout-page">
      <div>
        <Image
          className="planner-hero"
          src={Hero}
          alt="Loading a heavy barbell."
          priority
        />
      </div>
      <div className="workout-container">
        <div className="col-1">
          <div className="search-bar">
            <h2>Search the Exercise Database</h2>
            <h3>Enter a muscle group in the box below.</h3>
            <input
              className="ex-search"
              type="text"
              placeholder="Search exercises"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="btn full-rounded ex-button border"
              type="submit"
              onClick={handleSearch}
            >
              Search
              <div className="border full-rounded" />
            </button>
          </div>
          {buttonShow && (
              <input value= {workoutTitle} type="string" onChange={(e) => setWorkoutTitle(e.target.value)}/>
            )}
          <div>
            {formData &&
              formData.map((val, index) => {
                return (
                  <div>
                    <WorkoutEditCard
                      key={index}
                      index={index}
                      name={val.name}
                      handleSetChange={handleSetChange}
                      handleRepChange={handleRepChange}
                    />
                  </div>
                );
              })}
            {buttonShow && (
              <button onClick={() => handleWorkoutSubmit()}>
                Submit Workout
              </button>
            )}
          </div>
        </div>
        <div className="col-2">
          <div className="exercises">
            {repo &&
              repo.map((val, index) => {
                return (
                  <button
                    value={index}
                    onClick={() => {
                      handleCardClick(val.name), showButton(true);
                    }}
                  >
                    <ExerciseCard
                      key={index}
                      name={val.name}
                      type={val.type}
                      muscle={val.muscle}
                    />
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
