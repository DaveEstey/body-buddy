"use client";

import { useState, useEffect } from "react";
import WorkoutCard from "./WorkoutCard";
import "./WorkoutContainerStyles.css";

const ProfileWorkoutContainer = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const user = "643c2fd2b8b809c22b6cc7f2";
    fetch(`/api/profile/${user}`)
      .then((response) => response.json())
      .then((data) => setWorkouts(data.workouts))
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  // Limit the number of workouts to display
  const displayedWorkouts = workouts.slice(0, 4);

  return (
    <div className="sample-workouts">
      <h1>Your Workouts</h1>
      <div className="workout-card-container">
        {displayedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default ProfileWorkoutContainer;
